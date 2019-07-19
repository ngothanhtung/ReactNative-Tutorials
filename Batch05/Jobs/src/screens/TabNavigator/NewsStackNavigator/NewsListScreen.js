import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class NewsListScreen extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
				<Text> NewsListScreen </Text>
				<Button
					title='Go to details'
					onPress={() => {
						this.props.navigation.navigate('NewsDetailsScreen');
					}}
				/>
			</View>
		);
	}
}
