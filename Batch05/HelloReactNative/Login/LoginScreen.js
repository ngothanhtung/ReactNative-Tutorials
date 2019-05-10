import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Logo from './Logo';
import TextBox from './TextBox';
import Button from './Button';

import BackgroundImageUrl from './resources/background.png';

export default class LoginScreen extends Component {
	render() {
		return (
			<ImageBackground style={{ flex: 1 }} source={BackgroundImageUrl}>
				<View
					style={{
						backgroundColor: 'red',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Logo />
				</View>
				<View
					style={{
						backgroundColor: 'orange',
						flex: 2,
						paddingHorizontal: 24,
						justifyContent: 'center',
					}}
				>
					<TextBox text='Enter your username' />
					<View style={{ height: 12 }} />
					<TextBox text='Enter your password' />
					<View style={{ height: 12 }} />
					<Button />
					<View style={{ height: 12 }} />
					<View style={{ alignItems: 'center' }}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>Forgot your password?</Text>
					</View>
				</View>
				<View style={{ backgroundColor: 'green', height: 60, justifyContent: 'center' }}>
					<View style={{ alignItems: 'center' }}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
					</View>
				</View>
			</ImageBackground>
		);
	}
}
