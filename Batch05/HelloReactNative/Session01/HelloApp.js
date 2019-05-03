import React from 'react';
import { View, Text } from 'react-native';

class HelloApp extends React.Component {
	render() {
		return (
			<View>
				<Text style={{ fontSize: 32, color: 'blue' }}>Hello</Text>
			</View>
		);
	}
}

export default HelloApp;
