import React, { Component } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';

import LogoUrl from '../assets/images/doosan-logo.png';

export default class Loading extends Component {
	render() {
		return (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Image source={LogoUrl} style={{ width: 303, height: 116 }} />
				<View style={{ height: 24 }} />
				<ActivityIndicator size='large' color='green' />
				<View style={{ height: 16 }} />
				<Text> Loading ... </Text>
			</View>
		);
	}
}
