import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Button extends Component {
	render() {
		return (
			<View style={{ backgroundColor: this.props.color, height: 48, justifyContent: 'center', alignItems: 'center' }}>
				<Text> {this.props.text} </Text>
			</View>
		);
	}
}
