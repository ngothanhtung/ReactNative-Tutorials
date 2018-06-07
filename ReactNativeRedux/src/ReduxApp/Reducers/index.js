import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import albumReducer from './albumReducer';
import photoReducer from './photoReducer';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
	counterReducer,
	// albumReducer,
	// photoReducer,
	// authReducer,
	// themeReducer,
	// shoppingCartReducer,
});

export default rootReducer;