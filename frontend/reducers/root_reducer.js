import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';


// const rootReducer = () => {};
const rootReducer = combineReducers({session: sessionReducer});

export default rootReducer;