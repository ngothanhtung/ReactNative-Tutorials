import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	albumReducer,
	photoReducer,
});

export default rootReducer;