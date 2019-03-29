import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { login, logout, signup } from './util/session_api_util.js'

document.addEventListener('DOMContentLoaded', () => {

    //TESTING ONLY//
    window.login = login
    window.logout = logout
    window.signup = signup
    //TESTING ONLY//


  ReactDOM.render(<Root store={configureStore()}/>,
  document.getElementById('root'));  
});