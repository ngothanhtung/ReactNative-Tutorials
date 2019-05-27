import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
				<Text> HomeScreen </Text>
				<Button
					title='Login'
					onPress={() => {
						this.props.navigation.navigate('LoginScreen', { message: 'Hello From HomeScreen' });
					}}
				/>
			</View>
		);
	}
}
