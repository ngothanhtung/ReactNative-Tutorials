import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Drawer2Screen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Drawer2Screen </Text>
			</View>
		);
	}
}
