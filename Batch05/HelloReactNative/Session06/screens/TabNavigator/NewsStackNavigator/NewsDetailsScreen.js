import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';

class NewsDetailsScreen extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}>
				<Text> NewsDetailsScreen </Text>
				<NavigationEvents
					onWillFocus={(payload) => {
						console.log('onWillFocus: ', payload);
					}}
					onDidFocus={(payload) => {
						console.log('onDidFocus: ', payload);
					}}
					onWillBlur={(payload) => {
						console.log('onWillBlur: ', payload);
					}}
					onDidBlur={(payload) => {
						console.log('onDidBlur:', payload);
					}}
				/>
			</View>
		);
	}
}
export default withNavigationFocus(NewsDetailsScreen);
