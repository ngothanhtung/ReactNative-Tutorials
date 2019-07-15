import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Header from './Header';

export default class App extends Component {
	render() {
		let pic = { uri: 'https://i.pravatar.cc/150?img=47' };

		return (
			<View style={{ backgroundColor: 'red' }}>
				<Header color={{}} />
				<Header text='Good bye!' color='orange' />
				<Text> Xin chao React Native </Text>
				<Image source={pic} style={{ height: 100, width: 100 }} />
			</View>
		);
	}
}
