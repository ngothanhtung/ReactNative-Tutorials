import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { deposit, withDraw } from '../actions';

class Counter extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Button title='Deposite' onPress={() => this.props.deposite(100000)} />
				<Text style={{ fontSize: 32 }}> {this.props.balance} </Text>
				<Button title='With Draw' onPress={() => this.props.withDraw(1)} />
			</View>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	// this.props.count
	balance: state.atmReducer.balance,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	// this.props.increaseCount(5);
	deposite: (money) => dispatch(deposit(money)),
	withDraw: (money) => dispatch(withDraw(money)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
