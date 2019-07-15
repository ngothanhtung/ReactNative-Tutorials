import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

class Header extends Component {
	render() {
		return (
			<View style={{ height: 100, backgroundColor: this.props.color }}>
				<Text style={{ fontSize: 20 }}>{this.props.text}</Text>
			</View>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string,
};

// Specifies the default values for props:
Header.defaultProps = {
	text: 'This is HEADER',
};

export default Header;
