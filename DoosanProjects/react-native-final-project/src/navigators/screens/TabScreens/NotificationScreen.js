import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class NotificationScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'violet' }}>
				<Text> NotificationScreen </Text>
			</SafeAreaView>
		);
	}
}
