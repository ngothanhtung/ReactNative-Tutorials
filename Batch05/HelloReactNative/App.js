import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
import Button from './components/Button';
import LoginScreen from './Login/LoginScreen';
import StateExample from './Session03/StateExample';
import ConditionalRender from './Session03/ConditionalRender';
import StyleExample from './Session04/StyleExample';
import FlexLayout from './Session05/FlexLayout';
import Instagram from './Session05/Instagram';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				{/* <Header /> */}
				{/* <Post name='Peter' phone='0905123456' /> */}
				{/* <View style={{ height: 32 }} /> */}
				{/* <Post name='Mary' /> */}

				{/* <View style={{ height: 32 }} />
				<Button text='Click me' color='red' />
				<View style={{ height: 32 }} />
				<Button text='Open' color='green' /> */}
				{/* <LoginScreen /> */}
				{/* <StateExample /> */}
				{/* <ConditionalRender /> */}
				{/* <StyleExample /> */}
				{/* <FlexLayout /> */}
				<Instagram />
			</SafeAreaView>
		);
	}
}
