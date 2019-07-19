import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default class ProductScreen extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: 'orange' }}>
				<Text> ProductScreen </Text>
			</SafeAreaView>
		);
	}
}
