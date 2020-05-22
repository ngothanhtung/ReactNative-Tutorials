import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import buttonStyle from '../styles/buttonStyle';

const styles = StyleSheet.create({
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
});

export default class StyleExample extends Component {
	render() {
		return (
			<View>
				<Text style={styles.bigBlue}> textInComponent </Text>
				<Text style={styles.bigBlue}> textInComponent </Text>
				<Text style={styles.red}> textInComponent </Text>
				<View style={buttonStyle.blueButton} />
			</View>
		);
	}
}
