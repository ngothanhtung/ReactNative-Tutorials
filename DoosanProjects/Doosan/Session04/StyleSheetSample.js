import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MyButton from './MyButton';
import styles from './styles';

// const styles = StyleSheet.create({
// 	bigBlue: {
// 		color: 'blue',
// 		fontWeight: 'bold',
// 		fontSize: 30,
// 	},
// 	red: {
// 		color: 'red',
// 	},
// });

export default class StyleSheetSample extends Component {
	render() {
		return (
			<View>
				<Text style={styles.bigBlue}> textInComponent </Text>
				<MyButton title='Click me' />
			</View>
		);
	}
}
