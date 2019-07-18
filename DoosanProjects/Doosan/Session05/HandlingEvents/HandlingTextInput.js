import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default class HandlingTextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}
	render() {
		return (
			<View style={{ padding: 12 }}>
				<TextInput
					autoCapitalize='none'
					autoFocus={true}
					clearButtonMode='always'
					keyboardType='numbers-and-punctuation'
					keyboardAppearance='dark'
					style={{ height: 48, backgroundColor: '#bdc3c7', borderRadius: 12, paddingHorizontal: 8 }}
					onChangeText={(text) => {
						this.setState({ username: text });
					}}
					onEndEditing={() => {
						// alert('END');
					}}
					placeholder='Enter your username'
					placeholderTextColor='red'
					underlineColorAndroid='transparent'
				/>
				<View style={{ height: 12 }} />
				<TextInput
					secureTextEntry={true}
					style={{ height: 48, backgroundColor: '#bdc3c7', borderRadius: 12, paddingHorizontal: 8 }}
					onChangeText={(text) => {
						this.setState({ password: text });
					}}
				/>
				<Text>
					{this.state.username} : {this.state.password}
				</Text>
				<Button title='Click me' />
				<TouchableHighlight
					style={{ height: 48, backgroundColor: 'gray' }}
					onPress={() => {
						alert('TouchableHighlight');
					}}
				>
					<Text>TouchableHighlight</Text>
				</TouchableHighlight>
			</View>
		);
	}
}
