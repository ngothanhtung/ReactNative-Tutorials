import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';

var { height, width } = Dimensions.get('window');
// var height = Dimensions.get('window').height;
// var width = Dimensions.get('window').width;

export default class HeightAndWidth extends Component {
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
