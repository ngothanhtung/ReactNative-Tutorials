import React, { Component } from 'react';
import { View } from 'react-native';
import Login from '../../../modules/AuthModule/components/Login';

export default class LoginScreen extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Login />
			</View>
		);
	}
}
