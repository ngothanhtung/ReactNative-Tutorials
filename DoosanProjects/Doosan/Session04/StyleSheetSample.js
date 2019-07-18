import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import MyButton from './MyButton';
import MyTextInput from './MyTextInput';
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
			<View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
				<MyButton
					title='Save'
					iconName='home'
					onPress={() => {
						alert('Save');
					}}
				/>
				<MyButton
					title='Camera'
					iconName='camera'
					backgroundColor='green'
					onPress={() => {
						alert('Camera');
					}}
				/>

				<MyTextInput
					ref={(c) => (this.t1 = c)}
					onChangeText={(text) => {}}
					onEndEditing={() => {
						this.t2.focus();
					}}
				/>
				<MyTextInput
					ref={(c) => (this.t2 = c)}
					onChangeText={(text) => {
						//
					}}
				/>
			</View>
		);
	}
}
