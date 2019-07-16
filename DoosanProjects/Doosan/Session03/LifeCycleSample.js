import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LifeCycleSample extends Component {
	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = {
			count: 0,
		};
	}

	// componentWillMount() {
	// 	console.log('componentWillMount');
	// }
	render() {
		console.log('render');
		return (
			<View>
				<Text> {this.state.count} </Text>
			</View>
		);
	}

	componentDidMount() {
		console.log('componentDidMount');
		this.setState({ count: 100 });
	}
}
