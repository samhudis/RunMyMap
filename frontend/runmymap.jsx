import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './util/session_api_util.js'
// import { fetchRoutes } from './util/route_api_util.js'
import { fetchRoutes } from './actions/route_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { id: window.currentUser.id }
    };
  store = configureStore(preloadedState);
  delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  //TESTING ONLY//
  window.fetchRoutes = fetchRoutes;
  window.store = store;
  window.getState = store.getState;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  //TESTING ONLY//
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store}/>, root);
});