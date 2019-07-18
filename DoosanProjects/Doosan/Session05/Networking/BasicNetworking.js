import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BasicNetworking extends Component {
	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		// try {
		// 	let response1 = await fetch('https://facebook.github.io/react-native/movies.json');
		// 	let response2 = await fetch('https://facebook.github.io/react-native/movies.json');
		// 	let response3 = await fetch('https://facebook.github.io/react-native/movies.json');
		// } catch (error) {}

		// METHOD: GET
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				// XU LY KET QUA JSON NHAN DUOC
				console.log(json);
				console.log('DONE 1.A');
			});

		// METHOD: GET
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				// XU LY KET QUA JSON NHAN DUOC
				console.log(json);
				console.log('DONE 1.B');
			});

		console.log('DONE 2');
		console.log('DONE 3');
		console.log('DONE 4');
	}

	render() {
		console.log('RENDER');
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
