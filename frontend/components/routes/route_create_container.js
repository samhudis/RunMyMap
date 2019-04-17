import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createRoute, clearErrors }from '../../actions/route_actions';
import RouteCreate from './route_create';

const msp = (state) => {
    return {errors: state.errors, formType: 'create', user_id: state.session.id, polyline: state.entities.polyline};
};

const mdp = dispatch => {
    return {processForm: (route, props) => dispatch(createRoute(route,props)),
            clearErrors: () => dispatch(clearErrors())};
};

export default connect(msp, mdp)(RouteCreate);