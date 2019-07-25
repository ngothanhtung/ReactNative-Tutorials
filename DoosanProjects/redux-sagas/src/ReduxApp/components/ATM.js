import React, { Component } from 'react';
import { TextInput, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { withdraw, deposite } from '../actions';
import ATMBalance from './ATMBalance';

class ATM extends Component {
	constructor(props) {
		super(props);
		this.state = {
			money: 0,
		};
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ATMBalance />
				<TextInput
					style={{ height: 44, backgroundColor: 'yellow', paddingHorizontal: 8 }}
					onChangeText={(text) => {
						this.setState({ money: parseInt(text) });
					}}
				/>

				<Button
					title='Deposit'
					onPress={() => {
						this.props.deposite(this.state.money);
					}}
				/>
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
	withdraw: (money) => dispatch(withdraw(money)),
	deposite: (money) => dispatch(deposite(money)),
});

// export default Counter;
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ATM);
