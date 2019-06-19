import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer';
import atmReducer from './reducers/atmReducer';
const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
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
