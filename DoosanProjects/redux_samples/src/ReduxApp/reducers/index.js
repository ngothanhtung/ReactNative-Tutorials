import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import atmReducer from './atmReducer';

const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
});

export default rootReducer;
