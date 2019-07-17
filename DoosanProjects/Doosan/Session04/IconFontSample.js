import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconFontSample extends Component {
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
				<Icon name='home' size={24} />
			</View>
		);
	}
}
