import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class RegisterComponent extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: 'violet',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text> REGISTER </Text>
			</View>
		);
	}
}
