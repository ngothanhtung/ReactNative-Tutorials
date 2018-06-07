import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

import CounterApp from './CounterApp';
import GalleryApp from './GalleryApp';
import AuthApp from './AuthApp';

import StackNavigator from './StackNavigator';

import rootReducer from './Reducers';
import ShoppingCartApp from './ShoppingCartApp';

// LOGGER MIDDLEWARE
// logger = ({ getState }) => {
// 	return next => action => {
// 		console.log('will dispatch', action)

// 		// Call the next dispatch method in the middleware chain.
// 		const returnValue = next(action)

// 		console.log('state after dispatch', getState())

// 		// This will likely be the action itself, unless
// 		// a middleware further in chain changed it.
// 		return returnValue
// 	}
// }


// MIDDLEWARE
const middewares = [
	// THUNK
	// thunkMiddleware,

	// PROMISE
	// promise(),

	// Custom Middleware
	// logger
];

// const store = createStore(
// 	rootReducer,	
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middewares))
);

export default class ReduxApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<CounterApp />
					{/* <GalleryApp />
					<AuthApp /> */}
					<ShoppingCartApp />
				</View>
				{/* <StackNavigator /> */}
			</Provider>
		);
	}
}