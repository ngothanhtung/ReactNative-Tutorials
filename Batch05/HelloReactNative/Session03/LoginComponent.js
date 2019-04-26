import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoginComponent extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'orange',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text> LOGIN </Text>
			</View>
		);
	}
}
