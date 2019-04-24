import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Avatar extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#ea7070', height: 80, flexDirection: 'row' }}>
				<View style={{ backgroundColor: '#2d095c', width: 80 }} />

				<View style={{ backgroundColor: 'green', flex: 1 }}>
					<Text style={{ fontSize: 30 }}>{this.props.name}</Text>
				</View>
				<View style={{ backgroundColor: '#2694ab', width: 80 }} />
			</View>
		);
	}
}
