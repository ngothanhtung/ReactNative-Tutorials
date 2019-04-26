import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class ChildComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};

		// Toggle the state every second
		setInterval(() => {
			var tmp = this.state.count;
			tmp++;
			// WRONG: this.state.count = count;
			this.setState({ count: tmp });
		}, 1000);
	}

	render() {
		console.log('Blue Render');
		return (
			<Text style={{ color: 'blue', fontSize: 32 }}>{this.state.count}</Text>
		);
	}
}
