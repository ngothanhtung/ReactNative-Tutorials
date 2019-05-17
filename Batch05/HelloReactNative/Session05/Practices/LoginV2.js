import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextBox from './components/TextBox';

export default class LoginV2 extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			loading: false,
			email: '',
			password: '',
		};
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<TextBox
					placeholder='Enter your email'
					iconName='email'
					onChangeText={text => {
						this.setState({ email: text });
					}}
				/>
				<TextBox
					secureTextEntry={true}
					placeholder='Enter your password'
					iconName='lock'
					onChangeText={text => {
						this.setState({ password: text });
					}}
				/>
				<Text>{this.state.email}</Text>
				<Text>{this.state.password}</Text>
			</View>
		);
	}
}
