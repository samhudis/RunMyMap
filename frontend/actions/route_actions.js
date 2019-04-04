import * as RouteApiUtil from '../util/route_api_util';


export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE"
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";

const receiveErrors = errors => {
    return {type: RECEIVE_ROUTE_ERRORS, errors}}

const receiveRoute = route => {
    return {type: RECEIVE_ROUTES, route}}

const receiveAllRoutes = routes => {
    return {type: RECEIVE_ALL_ROUTES, routes}}

export const fetchRoutes = () => {
    return dispatch => {
        return (RouteApiUtil.fetchRoutes().then( routes => {
            dispatch(receiveAllRoutes(routes))},
            error => dispatch(receiveErrors(error.responseJSON))
    ))};
};

// export const logout = () => { 
//     return dispatch => {
//         return (SessionApiUtil.logout().then( () => {
//             dispatch(logoutCurrentUser())},
//             error => dispatch(receiveErrors(error.responseJSON))
//     ))};
// };

// export const signup = user => {
//     return dispatch => {
//         return (SessionApiUtil.signup(user).then(user => {
//             dispatch(receiveCurrentUser(user))},
//             error => dispatch(receiveErrors(error.responseJSON))))}}
