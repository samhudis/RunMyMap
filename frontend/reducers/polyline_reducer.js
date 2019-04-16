import { SEND_POLYLINE  } from '../actions/route_actions';
import merge from 'lodash/merge';

export default (state={}, action) => {
    switch (action.type) {
        case SEND_POLYLINE:
            return merge({}, state, {polyline: action.polyline})
        default:
            return state;
    }
}