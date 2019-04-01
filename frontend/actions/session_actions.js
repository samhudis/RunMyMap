import * as SessionApiUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

export const login = user => {
    return dispatch => {
        return SessionApiUtil.login(user).then(user => {
            return dispatch({type: RECEIVE_CURRENT_USER, user: user });
            });
        };
    };

export const logout = () => {
    return dispatch => {
        return SessionApiUtil.logout().then( () => {
            return dispatch({type: REMOVE_CURRENT_USER});
        });
    };
};

export const signup = user => {
    return dispatch => {
        return SessionApiUtil.signup(user).then (user => {
            return dispatch({type:RECEIVE_CURRENT_USER, user: user});
        });
    };
};
