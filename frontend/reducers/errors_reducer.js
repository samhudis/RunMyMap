import { combineReducers } from 'redux';
import sessionErrrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({session: sessionErrrorsReducer});

export default errorsReducer;

