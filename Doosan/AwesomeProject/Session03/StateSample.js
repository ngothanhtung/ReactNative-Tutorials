import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class StateSample extends Component {
	// 1 Khởi tạo state
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			background: 'white',
		};
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text> {this.state.count} </Text>
				<Button
					title='Click me!'
					onPress={() => {
						var c = this.state.count;
						c++;
						this.setState({ count: c }, () => {
							this.setState({ background: 'red' });
						});
					}}
				/>
			</View>
		);
	}
}
