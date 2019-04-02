import * as SessionApiUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveErrors = errors => {
    return {type: RECEIVE_SESSION_ERRORS, errors}}

export const logoutCurrentUser = () => {
    return {type: REMOVE_CURRENT_USER}}

export const receiveCurrentUser = currentUser => {
    return {type: RECEIVE_CURRENT_USER, user: currentUser}}

export const login = user => { 
    return dispatch => {
        return (SessionApiUtil.login(user).then(user => {
            dispatch(receiveCurrentUser(user))},
            error => dispatch(receiveErrors(error.responseJSON))
    ))};
};

export const logout = () => { 
    return dispatch => {
        return (SessionApiUtil.logout().then( () => {
            dispatch(logoutCurrentUser())},
            error => dispatch(receiveErrors(error.responseJSON))
    ))};
};

export const signup = user => {
    return dispatch => {
        return (SessionApiUtil.signup(user).then(user => {
            dispatch(receiveCurrentUser(user))},
            error => dispatch(receiveErrors(error.responseJSON))))}}
