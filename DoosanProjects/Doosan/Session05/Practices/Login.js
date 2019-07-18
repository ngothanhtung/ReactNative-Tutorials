import React, { Component } from 'react';
import { SafeAreaView, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			loading: false,
			email: '',
			emailError: false,
			password: '',
		};
	}

	login = () => {
		if (this.state.email.length === 0) {
			this.setState({ emailError: true });
			return;
		}

		this.setState({ loading: true });
		axios
			.post('https://softech.dev/api/training/users/login', {
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				this.setState({ loading: false });
				const result = response.data;
				if (result.login === true) {
					Alert.alert('THÔNG BÁO', 'Đăng nhập thành công');
				} else {
					Alert.alert('THÔNG BÁO', 'Sai email hoặc mật khẩu');
				}
			})
			.catch((error) => {
				this.setState({ loading: false });
				console.log(error);
				Alert.alert('THÔNG BÁO', 'Có lỗi xảy ra');
			});
	};
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<Animatable.View animation='zoomIn' duration={1000} style={{ flex: 1, padding: 12 }}>
					<View />
					{/* EMAIL --------------------------------- */}
					<View style={{ flexDirection: 'row', backgroundColor: '#b2bec3', borderRadius: 24 }}>
						<View style={{ justifyContent: 'center', paddingLeft: 16 }}>
							<Icon name='email' size={24} />
						</View>
						<View style={{ flex: 1 }}>
							<TextInput
								style={{ height: 48, paddingHorizontal: 8 }}
								placeholder='Enter your email'
								onChangeText={(text) => {
									this.setState({ emailError: text.length === 0 });
									this.setState({ email: text });
								}}
							/>
						</View>
						{this.state.emailError && (
							<Animatable.View animation='flash' duration={1000} delay={200} style={{ justifyContent: 'center', paddingRight: 16 }}>
								<Icon name='alert-circle' size={24} color='red' />
							</Animatable.View>
						)}
					</View>
					{/* PASSWORD ------------------------------ */}
					<View>
						<TextInput
							placeholder='Enter your password'
							secureTextEntry={true}
							onChangeText={(text) => {
								this.setState({ password: text });
							}}
						/>
					</View>
					<View>
						<Button title='Login' onPress={this.login} />
					</View>
					{this.state.loading && (
						<View>
							<ActivityIndicator size='large' />
						</View>
					)}
				</Animatable.View>
			</SafeAreaView>
		);
	}
}
