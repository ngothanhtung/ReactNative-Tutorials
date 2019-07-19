import React, { Component } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

export default class HomeScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
				<Text> HomeScreen </Text>
				<Button
					title='Display Drawer'
					onPress={() => {
						// this.props.navigation.openDrawer();
						this.props.navigation.dispatch(DrawerActions.toggleDrawer());
					}}
				/>
			</SafeAreaView>
		);
	}
}
