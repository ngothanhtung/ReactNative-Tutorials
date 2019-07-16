import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class StyleSample extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow' }}>
				<View style={{ flex: 25, backgroundColor: 'green', justifyContent: 'flex-end', alignItems: 'center' }}>
					<Text>LOGIN</Text>
				</View>
				<View style={{ flex: 75, backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center' }}>
					<View style={{ height: 100, width: 100, backgroundColor: 'pink' }} />
					<View style={{ height: 100, width: 100, backgroundColor: 'black' }} />
					<View style={{ height: 100, width: 100, backgroundColor: 'blue' }} />
				</View>
			</View>
		);
	}
}
