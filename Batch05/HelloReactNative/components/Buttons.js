import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Buttons extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#ea7070', height: 40, flexDirection: 'row' }}>
				<View style={{ backgroundColor: '#2d095c', width: 80 }} />

				<View style={{ backgroundColor: '#e59572', width: 80 }} />

				<View style={{ backgroundColor: 'green', flex: 1 }} />
				<View style={{ backgroundColor: '#2694ab', width: 80 }} />
			</View>
		);
	}
}
