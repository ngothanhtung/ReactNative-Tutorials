import React, { Component } from 'react';
import { Text, View, TextInput, SafeAreaView, Button } from 'react-native';

export default class HandlingTextInputSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
		};
	}
	render() {
		return (
			<SafeAreaView>
				<TextInput
					style={{ height: 44, backgroundColor: 'yellow' }}
					onChangeText={(text) => {
						this.setState({ username: text });
					}}
				/>
				<Text>{this.state.username}</Text>
				<Button
					title='Login'
					onPress={() => {
						console.log(this.state.username);
					}}
				/>
			</SafeAreaView>
		);
	}
}
