import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TextBox extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'white', height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
				<Text style={{ color: '#bdc3c7' }}> {this.props.text} </Text>
			</View>
		);
	}
}
