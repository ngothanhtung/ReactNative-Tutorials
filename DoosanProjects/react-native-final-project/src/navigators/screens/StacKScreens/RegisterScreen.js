import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class RegisterScreen extends Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
				<Text> RegisterScreen </Text>
				<Text>{this.props.navigation.state.params.message}</Text>
			</SafeAreaView>
		);
	}
}
