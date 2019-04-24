import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import LogoUrl from './resources/react-native-logo.png';
export default class Logo extends Component {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
		};
		return (
			<View>
				{/* <Image source={pic} style={{ width: 193, height: 110 }} /> */}
				<Image source={LogoUrl} style={{ width: 160, height: 160 }} />
			</View>
		);
	}
}
