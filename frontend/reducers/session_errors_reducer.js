import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge([], action.errors)
        default:
            return []
    };
};

