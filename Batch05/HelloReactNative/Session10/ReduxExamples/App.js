import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './src/store';
import Counter from './src/components/Counter';
import IncreaseButton from './src/components/IncreaseButton';
import ATM from './src/components/ATM';
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
					<Counter />
					<IncreaseButton />
					<ATM />
				</SafeAreaView>
			</Provider>
		);
	}
}
