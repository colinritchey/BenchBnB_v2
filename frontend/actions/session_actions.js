export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
import * as APIUtil from '../util/session_api_util';

export const login = (user) => (dispatch) => {

  APIUtil.signin(user)
    .then(_user => dispatch(receiveCurrentUser(_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => (dispatch) => {
  APIUtil.signout()
    .then(() => dispatch(receiveCurrentUser(null)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = (user) => (dispatch) => {

  APIUtil.signup(user)
    .then(_user => dispatch(receiveCurrentUser(_user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});
