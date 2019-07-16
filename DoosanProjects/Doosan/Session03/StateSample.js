import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class StateSample extends Component {
	// 1 Khởi tạo state
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			check: true,
		};
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
				<Text> {this.state.count} </Text>
				<View style={{ padding: 12, height: 100, width: 100, backgroundColor: 'yellow' }}>
					<View style={{ backgroundColor: this.state.check ? 'green' : 'yellow', flex: 1 }} />
				</View>
				<Button
					title='Click me'
					onPress={() => {
						var c = this.state.count;
						c++;
						this.setState({ count: c });
						// DON'T
						// this.state.count++;
					}}
				/>

				<Button
					title='Check'
					onPress={() => {
						var check = !this.state.check;
						this.setState({ check: check });
					}}
				/>
			</View>
		);
	}
}
