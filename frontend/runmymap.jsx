import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './util/session_api_util.js'
import { fetchRoutes,  fetchRoute, createRoute } from './util/route_api_util.js'

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
  // window.fetchRoutes = fetchRoutes;
  // window.fetchRoute = fetchRoute;
  // window.createRoute = createRoute;
  // window.store = store;
  // window.getState = store.getState;
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  // window.create
  //TESTING ONLY//
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store}/>, root);
});