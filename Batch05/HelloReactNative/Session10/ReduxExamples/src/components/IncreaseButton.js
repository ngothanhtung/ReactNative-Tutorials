import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { increaseCount } from '../actions';

class IncreaseButton extends Component {
	render() {
		return (
			<Button
				title='Increase'
				onPress={() => {
					this.props.increaseCount(1);
				}}
			/>
		);
	}
}

// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
	// this.props.count
	// count: state.counterReducer.count,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
	// this.props.increaseCount(5);
	increaseCount: (number) => dispatch(increaseCount(number)),
	// decreaseCount: (number) => dispatch(decreaseCount(number)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(IncreaseButton);
