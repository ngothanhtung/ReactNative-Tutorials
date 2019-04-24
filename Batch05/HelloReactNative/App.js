import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default class App extends Component {
	render() {
		return (
			<View>
				<Header />
			</View>
		);
	}
}
