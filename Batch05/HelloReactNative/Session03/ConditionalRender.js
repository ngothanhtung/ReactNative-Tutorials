import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

export default class ConditionalRender extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screenName: 'login',
		};
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.state.screenName === 'login' && <LoginComponent />}
				{this.state.screenName === 'register' && <RegisterComponent />}
				<Button
					title='Login'
					onPress={() => {
						this.setState({ screenName: 'login' });
					}}
				/>
				<Button
					title='Register'
					onPress={() => {
						this.setState({ screenName: 'register' });
					}}
				/>
			</View>
		);
	}
}
