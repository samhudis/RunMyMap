import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'


const App = () => {
    return (
    <div>
        <header>
            <nav className="main-nav">
            <Link to="/" className="header-link">
            <img src={window.button_logo} alt="Run My Map"/>
            </ Link>
            <Link to="/routes" className="routes-link">
            Routes
            </ Link>
            </nav>
            <GreetingContainer />
        </header>
        <div className="main">
        <div class="auth-form">
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </ Switch>
        </div>
        <img src='https://mapmy.uastatic.com/0b83673ac3015b5a0ec7e47944c4b108.png'/>
        <img src='https://mapmy.uastatic.com/9b2217b59621acf4f24bfd26d9c2c3ca.png'/>
        <img src='https://mapmy.uastatic.com/6c78b5381fab073aa188650c3b1a4193.jpg'/>
        </div>
        <footer>
        </footer>
    </div>
    );
}

export default App;


