import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import BgImage from '../assets/images/bg2.jpg';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}
	render() {
		return (
			<ImageBackground blurRadius={4} source={BgImage} style={{ flex: 1, position: 'relative' }}>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ height: 160, width: 160, backgroundColor: 'red' }} />
					</View>

					<View style={{ flex: 2, padding: 12, backgroundColor: 'transparent' }}>
						<View>
							<TextInput
								ref={(c) => (this.emailInput = c)}
								style={{ borderRadius: 4, height: 44, paddingHorizontal: 12, backgroundColor: 'white' }}
								onChangeText={(text) => {
									this.setState({ email: text });
								}}
								autoCorrect={false}
								autoCapitalize='none'
								placeholder='Enter your email'
								placeholderTextColor='#bdc3c7'
								keyboardType='email-address'
								onEndEditing={() => {
									this.passwordInput.focus();
								}}
							/>
						</View>
						<View style={{ height: 12 }} />
						<View>
							<TextInput
								ref={(c) => (this.passwordInput = c)}
								style={{ borderRadius: 4, height: 44, paddingHorizontal: 12, backgroundColor: 'white' }}
								onChangeText={(text) => {
									this.setState({ password: text });
								}}
								autoCorrect={false}
								autoCapitalize='none'
								secureTextEntry={true}
								placeholder='Enter your password'
								placeholderTextColor='#bdc3c7'
								returnKeyType='done'
								onEndEditing={() => {
									// LOGIN
								}}
							/>
						</View>
						<View style={{ height: 12 }} />
						<View>
							<TouchableOpacity
								style={{
									borderWidth: 2,
									borderColor: 'white',
									borderRadius: 4,
									height: 44,
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: '#d35400',
								}}
								onPress={() => {
									alert(this.state.email + ' - ' + this.state.password);
								}}>
								<Text style={{ color: 'white', fontWeight: '700' }}>LOGIN</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ height: 48, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
						<Text style={{ color: 'white', fontWeight: '700' }}>Copyright by DOOSAN</Text>
					</View>
				</SafeAreaView>
			</ImageBackground>
		);
	}
}
