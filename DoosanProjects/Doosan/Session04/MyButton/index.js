import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class index extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.container}>
				<Text style={styles.text}> {this.props.title} </Text>
			</TouchableOpacity>
		);
	}
}
