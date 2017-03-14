export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const LOGOUT = "LOGOUT";
import { hashHistory } from 'react-router';

import * as APIUtil from '../util/session_api_util';

export const login = (user) => (dispatch) => {
  APIUtil.signin(user)
    .then(_user => dispatch(receiveCurrentUser(_user)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  APIUtil.signout()
    .then(() => dispatch(receiveLogout()),
      errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(hashHistory.push('/'));
};

export const signup = (user) => (dispatch) => {
  APIUtil.signup(user)
    .then(_user => dispatch(receiveCurrentUser(_user)))
    .then(hashHistory.push('/'))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const receiveLogout = () => ({
  type: LOGOUT,
  currentUser: null
});
