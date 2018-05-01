import { combineReducers } from 'redux';
import counterReducer from './counter'

const rootReducer = combineReducers({
	counterReducer,
});

export default rootReducer;