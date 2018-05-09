import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './CounterApp';

import rootReducer from './Reducers';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider store={store}>
				<CounterApp />
			</Provider>
		);
	}
}