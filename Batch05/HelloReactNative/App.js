import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import Header from './components/Header';
// import Post from './components/Post';
// import Button from './components/Button';
// import LoginScreen from './Login/LoginScreen';
// import StateExample from './Session03/StateExample';
// import ConditionalRender from './Session03/ConditionalRender';
// import GenderComponent from './Session03/GenderComponent';
// import StyleExample from './Session04/StyleExample';
// import FlexLayout from './Session04/FlexLayout';
// import Instagram from './Session04/Instagram';
import Instagram2 from './Session04/Instagram2';
import HandlingTextInput from './Session05/HandlingTextInput';

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
				{/* <GenderComponent /> */}
				{/* <ConditionalRender /> */}
				{/* <StyleExample /> */}
				{/* <FlexLayout /> */}
				{/* <Instagram /> */}
				{/* <Instagram2 /> */}
				<HandlingTextInput />
			</SafeAreaView>
		);
	}
}
