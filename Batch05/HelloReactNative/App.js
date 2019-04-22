import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HelloApp from './HelloApp';

export default class App extends Component {
	render() {
		return (
			<View style={{ padding: 24 }}>
				<TouchableOpacity
					style={{
						borderRadius: 24,
						height: 48,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#3498db',
					}}
					onPress={() => {
						alert('Hello');
					}}
				>
					<Text style={{ color: 'white' }}>Click me</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
