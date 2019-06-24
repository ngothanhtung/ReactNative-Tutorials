import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer';
import atmReducer from './reducers/atmReducer';
import photoReducer from './reducers/photoReducer';
import loginReducer from './reducers/loginReducer';
// REDUX THUNK
import thunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({
	counterReducer,
	atmReducer,
	photoReducer,
	loginReducer,
	// themeReducer,
});

// SAGA: MIDDLEWARE
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

// MIDDLEWARE
const middewares = [thunkMiddleware, sagaMiddleware];

// Create Store
const store = createStore(
	rootReducer, // Include many reducers
	// debug
	composeWithDevTools(applyMiddleware(...middewares)),
);

import rootSagas from './rootSagas';
// SAGA: RUN
sagaMiddleware.run(rootSagas);

export default store;
