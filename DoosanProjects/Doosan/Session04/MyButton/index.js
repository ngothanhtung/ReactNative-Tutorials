import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

class MyButton extends Component {
	render() {
		return (
			<TouchableOpacity
				style={[styles.container, { backgroundColor: this.props.backgroundColor }]}
				onPress={() => {
					if (this.props.onPress) {
						this.props.onPress();
					}
				}}>
				{this.props.iconName && (
					<View>
						<Icon style={styles.icon} name={this.props.iconName} size={this.props.iconSize} />
					</View>
				)}
				<View style={{ paddingHorizontal: 4 }}>
					<Text style={styles.text}> {this.props.title} </Text>
				</View>
			</TouchableOpacity>
		);
	}
}

MyButton.propTypes = {
	title: PropTypes.string,
	iconName: PropTypes.string,
	iconSize: PropTypes.number,
	backgroundColor: PropTypes.string,
};

// Specifies the default values for props:
MyButton.defaultProps = {
	title: 'Click me',
	iconSize: 24,
	backgroundColor: '#2c3e50',
};

export default MyButton;
