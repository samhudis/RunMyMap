import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors }from '../../actions/session_actions';
import UserForm from './user_form';

const msp = ({ errors }) => {
    return {errors: errors.session, formType: 'signup', navLink: <Link to="/login" className="auth-alt">LOG IN</Link>};
};

const mdp = dispatch => {
    return {processForm: user => dispatch(signup(user)),
            clearErrors: () => dispatch(clearErrors())};
};

export default connect(msp, mdp)(UserForm);