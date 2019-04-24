import React, { Component } from 'react';
import { Alert, View, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import AptechLogoImage from './resources/aptech-logo.jpg';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},

	footerContainer: {
		marginTop: 20,
		flexDirection: 'row',
		marginBottom: 40,
	},

	inputText: {
		width: width - 60,
		height: 48,
		backgroundColor: '#dfe6e9',
		color: '#0c2461',
		padding: 12,
		marginBottom: 8,
	},
	buttonContainer: {
		backgroundColor: '#2d3436',
		paddingVertical: 15,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700',
	},
	loginButton: {
		color: '#fff',
		width: 240,
	},
	signUpText: {
		color: '#0c2461',
		textDecorationLine: 'underline',
		alignSelf: 'center',
	},
	headerText: {
		fontSize: 24,
		color: '#0c2461',
		marginBottom: 12,
	},
	hr: {
		borderBottomColor: '#0c2461',
		borderBottomWidth: 1,
		width: width - 60,
		marginBottom: 24,
	},

	logo: {
		width: 240,
		height: 175,
		alignSelf: 'center',
	},
});

const AptechLogo = () => <Image source={AptechLogoImage} resizeMode='contain' style={styles.logo} />;

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	onPressLogin() {
		const { username, password } = this.state;
		if (username === 'admin' && password === '123456789') {
			Alert.alert('React Native', 'Login OK');
		} else {
			Alert.alert('React Native', 'Login Failed');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<AptechLogo />
				<View>
					<Text style={styles.headerText}>STUDENT LOGIN</Text>
					<View style={styles.hr} />
					<TextInput
						style={styles.inputText}
						placeholder='Enter your email'
						keyboardType='email-address'
						autoCapitalize='none'
						autoCorrect={false}
						returnKeyType='next'
						underlineColorAndroid='transparent'
						onChangeText={text => this.setState({ username: text })}
						onSubmitEditing={() => this.passwordInput.focus()}
					/>
					<TextInput
						ref={input => {
							this.passwordInput = input;
						}}
						secureTextEntry
						style={styles.inputText}
						placeholder='Enter your password'
						returnKeyType='go'
						underlineColorAndroid='transparent'
						onChangeText={text => this.setState({ password: text })}
					/>
					<View>
						<TouchableOpacity
							style={styles.buttonContainer}
							onPress={() => {
								this.onPressLogin();
							}}
						>
							<Text style={styles.buttonText}>LOGIN</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.footerContainer}>
					<Text>Have an account? </Text>
					<TouchableOpacity
						onPress={() => {
							Alert.alert('React Native', 'This feature is coming soon (Next chapter)');
						}}
					>
						<Text style={styles.signUpText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default LoginScreen;
