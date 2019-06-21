import React, { Component } from 'react';
import { Image, Text, View, ActivityIndicator, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { loginAsync } from '../actions';

class Login extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				{this.props.loading && (
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator />
					</View>
				)}
				{!this.props.loading && this.props.user && (
					<View style={{ flex: 1 }}>
						<Text>Email: {this.props.user.email}</Text>
						<Text>Token: {this.props.user.token}</Text>
					</View>
				)}
			</View>
		);
	}

	componentDidMount() {
		this.props.loginAsync('eve.holt@reqres.in', 'cityslicka');
	}
}

const mapStateToProps = (state) => ({
	user: state.loginReducer.user,
	loading: state.loginReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
