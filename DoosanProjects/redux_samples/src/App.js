import React, { Component } from 'react';
import { Text, View } from 'react-native';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './ReduxApp/store';

import Counter from './ReduxApp/components/Counter';
import ATM from './ReduxApp/components/ATM';
import Photos from './ReduxApp/components/Photos';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<Counter />
					<ATM />
					<Photos />
				</View>
			</Provider>
		);
	}
}
