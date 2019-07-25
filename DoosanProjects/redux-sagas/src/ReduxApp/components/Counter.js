import React, { Component } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';

class Counter extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text> {this.props.count} </Text>
				<Button
					title='Increase'
					onPress={() => {
						this.props.increaseCount(1);
					}}
				/>

				<Button
					title='Decrease'
					onPress={() => {
						this.props.decreaseCount(1);
					}}
				/>
			</SafeAreaView>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	count: state.counterReducer.count,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	increaseCount: (number) => dispatch(increaseCount(number)),
	decreaseCount: (number) => dispatch(decreaseCount(number)),
});

// export default Counter;
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
