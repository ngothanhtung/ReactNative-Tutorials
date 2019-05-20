import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Tab4Screen extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Tab4Screen </Text>
			</View>
		);
	}
}
