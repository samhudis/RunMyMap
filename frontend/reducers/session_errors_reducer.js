import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
    switch (action.type) {
        // case RECEIVE_SESSION_ERRORS:
        //     return merge ({}, state, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            const newState =  merge([], state);
            delete newState.errors;
            return newState
        case RECEIVE_SESSION_ERRORS:
            return merge([], action.errors)
        default:
            return state;
    };
};

