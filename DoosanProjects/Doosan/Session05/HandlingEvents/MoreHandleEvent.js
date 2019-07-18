import React, { Component } from 'react';
import { Text, View, Button, SafeAreaView } from 'react-native';

export default class MoreHandleEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 0,
		};
		// 3. Bind in constructor()
		this.clickMeType4 = this.clickMeType4.bind(this);
	}

	clickMeType1(text) {
		this.setState({ text: text });
	}

	clickMeType2(text) {
		this.setState({ text: text });
	}

	// Use Arrow Function in Class Property (Without Parameters)
	clickMeType3 = () => {
		this.setState({ text: 'Hello' });
	};

	// 4. Bind in constructor()
	clickMeType4() {
		this.setState({ text: 'Hello' });
	}

	// 5. Use Arrow Function in Class Property (Within Parameters)
	clickMeType5 = (text) => () => {
		this.setState({ text: text });
		console.log(text);
	};

	render() {
		return (
			<SafeAreaView>
				{/* 1. Dynamic binding in render() */}
				<Button title='Click me 1' onPress={this.clickMeType1.bind(this, 'This is a parameter')} />

				{/* 2. Use Arrow Function in Render, similar to #1: (Quick Code) */}
				<Button
					title='Click me 2'
					onPress={() => {
						this.clickMeType2('This is a parameter');
					}}
				/>

				{/* 3. Use Arrow Function in Class Property (Without Parameters): Nên dùng */}
				<Button title='Click me 3' onPress={this.clickMeType3} />

				{/* 4 Bind in constructor() */}
				<Button title='Click me 4' onPress={this.clickMeType4} />

				{/* 5. Use Arrow Function in Class Property (Within Parameters): Nên dùng  */}
				<Button title='Click me 5' onPress={this.clickMeType5('This is a parameter')} />

				<Button
					title='Click me 6 (Quick Code)'
					onPress={() => {
						console.log('Click me (Hay gặp ở các ví dụ)');
					}}
				/>
			</SafeAreaView>
		);
	}
}
