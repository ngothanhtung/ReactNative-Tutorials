import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';
import authReducer from './authReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
	counterReducer: counterReducer,
	albumReducer,
	photoReducer,
	authReducer,
	themeReducer,
});

export default rootReducer;