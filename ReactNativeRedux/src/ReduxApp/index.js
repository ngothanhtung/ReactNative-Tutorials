import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';

import CounterApp from './CounterApp';
import GalleryApp from './GalleryApp';

import rootReducer from './Reducers';

// MIDDLEWARE
const middewares = [
	thunkMiddleware,
	promise(),
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
					<GalleryApp />
				</View>
			</Provider>
		);
	}
}