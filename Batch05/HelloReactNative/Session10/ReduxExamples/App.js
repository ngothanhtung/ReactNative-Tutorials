import React, { Component } from 'react';
import { Text, View } from 'react-native';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './src/store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View>
					<Text>Hello Redux</Text>
				</View>
			</Provider>
		);
	}
}
