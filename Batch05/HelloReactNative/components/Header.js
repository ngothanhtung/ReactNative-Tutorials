import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<SafeAreaView>
				<View style={{ backgroundColor: 'tomato', height: 60, justifyContent: 'center', alignItems: 'center' }}>
					<Text> INSTAGRAM </Text>
				</View>
			</SafeAreaView>
		);
	}
}
