import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.signin = APIUtil.signin;
window.signout = APIUtil.signout;
// window.signup = APIUtil.signup;
