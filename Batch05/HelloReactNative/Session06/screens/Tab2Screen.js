import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Tab2Screen extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Tab2Screen </Text>
			</View>
		);
	}
}
