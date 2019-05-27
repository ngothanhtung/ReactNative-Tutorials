import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Tab1Screen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Tab1Screen </Text>
			</View>
		);
	}
}
