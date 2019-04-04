import { RECEIVE_ALL_ROUTES, RECEIVE_ROUTE  } from '../actions/route_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_ROUTES:
            return merge({}, state, action.routes)
        case RECEIVE_ROUTE:
            return merge({}, state, {[action.route.id]: action.route})
        default:
            return state;
    }
}