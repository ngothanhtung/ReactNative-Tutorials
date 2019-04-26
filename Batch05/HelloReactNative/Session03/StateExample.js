import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ChildComponent from './ChildComponent';
export default class StateExample extends Component {
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
		}, 10000);
	}

	render() {
		console.log('Red: Render');
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'red', fontSize: 32 }}> {this.state.count} </Text>
				<ChildComponent />
			</View>
		);
	}
}
