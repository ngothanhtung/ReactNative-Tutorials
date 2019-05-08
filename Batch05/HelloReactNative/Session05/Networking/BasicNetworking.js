import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BasicNetworking extends Component {
	componentDidMount() {
		// GOI PHO
		// METHOD: GET
		fetch('https://facebook.github.io/react-native/movies.json')
			.then(response => {
				return response.json();
			})
			.then(json => {
				// XU LY KIET QUA JSON NHAN DUOC
				console.log(json);
				// AN PHO
				console.log('AN PHO');
			});

		// UONG NUOC
		console.log('ROT NUOC');
		console.log('CAM LY NUOC');
		console.log('UONG NUOC');
	}
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
