import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Drawer1Screen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
				<Text> Drawer1Screen </Text>
				<Button
					title='Open Drawer'
					onPress={() => {
						this.props.navigation.openDrawer();
					}}
				/>
			</View>
		);
	}
}
