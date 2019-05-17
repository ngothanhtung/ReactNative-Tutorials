import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {
	render() {
		return (
			<TouchableOpacity
				style={{ borderRadius: 22, height: 44, justifyContent: 'center', alignItems: 'center', backgroundColor: this.props.color }}
				onPress={() => {
					this.props.onTouch();
					//	alert('OK');
				}}
			>
				<Text style={{ color: 'white', fontWeight: '700' }}> {this.props.title} </Text>
			</TouchableOpacity>
		);
	}
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	// color: PropTypes.string.isRequired,
	color: PropTypes.oneOf(['red', 'green', 'blue']),
	onTouch: PropTypes.func,
};

Button.defaultProps = {
	title: 'Click me',
	color: 'green',
};

export default Button;
