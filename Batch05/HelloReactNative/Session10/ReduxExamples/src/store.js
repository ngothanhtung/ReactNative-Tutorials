import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer';
import atmReducer from './reducers/atmReducer';
import photoReducer from './reducers/photoReducer';
// REDUX THUNK
import thunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
	photoReducer,
	// themeReducer,
});

// MIDDLEWARE
const middewares = [thunkMiddleware];

// Create Store
const store = createStore(
	rootReducer, // Include many reducers
	// debug
	composeWithDevTools(applyMiddleware(...middewares)),
);

export default store;
