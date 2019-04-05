import * as RouteApiUtil from '../util/route_api_util';


export const RECEIVE_ALL_ROUTES = "RECEIVE_ALL_ROUTES";
export const RECEIVE_ROUTE = "RECEIVE_ROUTE"
export const RECEIVE_ROUTE_ERRORS = "RECEIVE_ROUTE_ERRORS";
export const SEND_ROUTE = "SEND_ROUTE";

export const receiveErrors = errors => {
    return {type: RECEIVE_ROUTE_ERRORS, errors}}

export const receiveRoute = route => {
    debugger
    return {type: RECEIVE_ROUTE, route}}

export const receiveAllRoutes = routes => {
    return {type: RECEIVE_ALL_ROUTES, routes}}

export const clearErrors = () => {
    return {type: CLEAR_ERRORS}}

// const sendRoute = route => {
//     return {type: SEND_ROUTE, route}
// }

export const fetchRoutes = () => {
    return dispatch => {
        return (RouteApiUtil.fetchRoutes().then( routes => {
            dispatch(receiveAllRoutes(routes))},
            error => dispatch(receiveErrors(error.responseJSON))
    ))};
};

export const fetchRoute = route => {
    debugger
    return dispatch => {
        return (RouteApiUtil.fetchRoute(route).then ( route => {
            debugger
            dispatch(receiveRoute(route))},
            error => dispatch(receiveErrors(error.responseJSON))
        ))};
}

export const createRoute = (route, props) => {
    return dispatch => {
        return (RouteApiUtil.createRoute(route).then ( route => {
            dispatch(receiveRoute(route))},
            error => dispatch(receiveErrors(error.responseJSON))
            ).then(props.history.push(`/routes/index`)
        ))}
        }


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
