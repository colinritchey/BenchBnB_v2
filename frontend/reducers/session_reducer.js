import { merge } from 'lodash';

import RECEIVE_CURRENT_USER from '../actions/session_actions.js';
import RECEIVE_ERRORS from '../actions/session_actions.js';
import LOGOUT from '../actions/session_actions.js';

const defaultState = () => (
  {currentUser: null, errors: []}
);

const SessionReducer = (oldState = defaultState(), action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, oldState, {currentUser , errors: []});
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, oldState, {currentUser: null, errors});
    case LOGOUT:
      return merge({}, defaultState());
    default:
      return oldState;
  }
};

export default SessionReducer;
