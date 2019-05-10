import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);
		// state
		this.state = {
			email: '',
			password: '',
		};
	}

	login = () => {
		axios
			.post('https://softech.dev/api/training/users/login', {
				email: this.state.email,
				password: this.state.password,
			})
			.then(response => {
				const result = response.data;
				if (result.login === true) {
					Alert.alert('THÔNG BÁO', 'Đăng nhập thành công');
				} else {
					Alert.alert('THÔNG BÁO', 'Sai email hoặc mật khẩu');
				}
			})
			.catch(error => {
				console.log(error);
				Alert.alert('THÔNG BÁO', 'Có lỗi xảy ra');
			});
	};
	render() {
		return (
			<View>
				<View />
				{/* EMAIL --------------------------------- */}
				<View>
					<TextInput
						placeholder='Enter your email'
						onChangeText={text => {
							this.setState({ email: text });
						}}
					/>
				</View>
				{/* PASSWORD ------------------------------ */}
				<View>
					<TextInput
						placeholder='Enter your password'
						secureTextEntry={true}
						onChangeText={text => {
							this.setState({ password: text });
						}}
					/>
				</View>
				<View>
					<Button title='Login' onPress={this.login} />
				</View>
			</View>
		);
	}
}
