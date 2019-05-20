import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class LoginScreen extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
				<Text> LoginScreen </Text>
				<Button
					title='Register'
					onPress={() => {
						this.props.navigation.navigate('RegisterScreen');
					}}
				/>
				<Text>{this.props.navigation.state.params.message}</Text>
			</View>
		);
	}
}
