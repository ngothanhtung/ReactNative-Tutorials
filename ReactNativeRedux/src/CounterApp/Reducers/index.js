import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import albumReducer from './albumReducer';

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	albumReducer,
});

export default rootReducer;