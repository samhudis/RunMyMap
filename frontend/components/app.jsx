import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import RouteIndexContainer from './routes/route_index_container';
import RoutesBackgroundContainer from './routes_background/routes_background_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import Background from './background/background'
import Footer from './footer/footer'


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
            <Switch>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <Route exact path="/routes/index" component={RouteIndexContainer} />
            </ Switch>
            <Route exact path ="/routes" component={RoutesBackgroundContainer} />
            <Route exact path="/" component={Background} />
        </div>
        <Route exact path="/" component={Footer} />
    </div>
    );
}

export default App;


