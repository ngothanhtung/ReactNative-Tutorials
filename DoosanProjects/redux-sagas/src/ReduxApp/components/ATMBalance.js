import React, { Component } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { withdraw, deposite } from '../actions';

class ATMBalance extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'red' }}>{this.props.balance}</Text>
			</SafeAreaView>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	balance: state.atmReducer.balance,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	// withdraw: (money) => dispatch(withdraw(money)),
	// deposite: (money) => dispatch(deposite(money)),
});

// export default Counter;
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ATMBalance);
