import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BasicNetworking extends Component {
	componentDidMount() {
		// GOI PHO
		// METHOD: GET
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				// XU LY KIET QUA JSON NHAN DUOC
				console.log(json);
				console.log('DONE 1');
			});

		console.log('DONE 2');
		console.log('DONE 3');
		console.log('DONE 4');
	}
	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
