import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return merge ({}, state, action.user);
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state;
    };
};

