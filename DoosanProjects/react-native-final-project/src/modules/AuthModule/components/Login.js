import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loginAsync } from '../actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: 'eve.holt@reqres.in',
			password: 'cityslicka',
		};
	}
	render() {
		return (
			<View style={{ flex: 1, paddingHorizontal: 24 }}>
				<View style={{ flex: 1 }} />
				<View style={{ flex: 2 }}>
					<View style={{ marginVertical: 8 }}>
						<Input
							value={this.state.email}
							placeholder='Enter your email'
							leftIcon={<Icon name='email' size={24} color='black' />}
							onChangeText={(text) => {
								this.setState({ email: text });
							}}
						/>
					</View>

					<View style={{ marginVertical: 8 }}>
						<Input
							value={this.state.password}
							placeholder='Enter your password'
							leftIcon={<Icon name='lock' size={24} color='black' />}
							secureTextEntry={true}
							onChangeText={(text) => {
								this.setState({ password: text });
							}}
						/>
					</View>
					<View style={{ marginVertical: 8 }}>
						<Button
							loading={this.props.loading}
							// disabled={this.props.loading}
							title='Login'
							raised={true}
							onPress={() => {
								const { email, password } = this.state;
								this.props.loginAsync(email, password);
							}}
							titleStyle={{ paddingLeft: 8 }}
							// icon={<Icon name='lock' size={24} color='black' />}
							icon={{ name: 'key', type: 'material-community', color: 'white' }}
						/>
					</View>
				</View>
			</View>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	loggedInUser: state.authReducer.loginReducer.loggedInUser,
	loading: state.authReducer.loginReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
