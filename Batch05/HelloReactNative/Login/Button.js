import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#8e44ad', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
				<Text style={{ color: 'white' }}> Login </Text>
			</View>
		);
	}
}
