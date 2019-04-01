import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge ({}, state, {id: action.user.id});
        case REMOVE_CURRENT_USER:
            return merge({}, state, {id: null})
        default:
            return state;
    };
};

