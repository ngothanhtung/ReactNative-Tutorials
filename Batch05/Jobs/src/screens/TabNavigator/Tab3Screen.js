import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Tab3Screen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Tab3Screen </Text>
			</View>
		);
	}
}
