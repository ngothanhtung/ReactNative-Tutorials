import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Likes extends Component {
	render() {
		return (
			<View style={{ backgroundColor: 'orange', height: 40, flexDirection: 'row' }}>
				<View style={{ backgroundColor: 'pink', width: 40 }} />

				<View style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', paddingHorizontal: 6 }}>
					<Text>Who?</Text>
				</View>
			</View>
		);
	}
}
