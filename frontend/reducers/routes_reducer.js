import { RECEIVE_ALL_ROUTES } from '../actions/route_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_ROUTES:
            return merge({}, state, action.routes)
    
        default:
            return state;
    }
}