import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer';
const rootReducer = combineReducers({
	counterReducer,
	// themeReducer,
});

// MIDDLEWARE
const middewares = [];

// Create Store
const store = createStore(
	rootReducer, // Include many reducers
	// debug
	composeWithDevTools(applyMiddleware(...middewares)),
);

export default store;
