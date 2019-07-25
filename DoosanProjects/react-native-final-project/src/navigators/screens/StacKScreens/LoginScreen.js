import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';

export default class LoginScreen extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'green' }}>
				<Text> LoginScreen </Text>
				<Button
					title='Register'
					onPress={() => {
						this.props.navigation.navigate('RegisterScreen', { message: 'Hello from Login' });
					}}
				/>
				<Button
					title='Go to Tab'
					onPress={() => {
						this.props.navigation.navigate('TabNavigator');
						this.props.navigation.navigate('AccountScreen');
					}}
				/>
			</SafeAreaView>
		);
	}
}
