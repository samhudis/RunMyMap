import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import sessionReducer from './session_reducer';
import routesReducer from './routes_reducer'
import polylineReducer from './polyline_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    routes: routesReducer,
    polyline: polylineReducer
});

export default entitiesReducer