import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Counter extends Component {
	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ fontSize: 32 }}> {this.props.count} </Text>
				{/* {this.props.user && (
					<View style={{ flex: 1 }}>
						<Text>Email: {this.props.user.email}</Text>
						<Text>Token: {this.props.user.token}</Text>
					</View>
				)} */}
			</View>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	// this.props.count
	count: state.counterReducer.count,
	// user: state.loginReducer.user,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	// this.props.increaseCount(5);
	// increaseCount: (number) => dispatch(increaseCount(number)),
	// decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
