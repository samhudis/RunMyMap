import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'log in',
        navLink: <Link to="/signup" className="auth-alt">SIGN UP</Link>,
    };
};

const mdp = dispatch => {
    return {processForm: user => dispatch(login(user))};
};

export default connect(msp,mdp)(SessionForm);