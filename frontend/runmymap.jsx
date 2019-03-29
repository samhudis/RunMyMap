import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './util/session_api_util.js'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTING ONLY//
  window.getState = store.getState;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //TESTING ONLY//
  const root = document.getElementById('root');
  
  
  ReactDOM.render(<Root store={store}/>, root);
});