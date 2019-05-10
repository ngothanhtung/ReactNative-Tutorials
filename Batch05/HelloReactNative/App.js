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
// import Instagram2 from './Session04/Instagram2';
// SESSION 05
//
import BasicNetworking from './Session05/Networking/BasicNetworking';
import Networking from './Session05/Networking/Networking';
import NetworkingMoreExamples from './Session05/Networking/NetworkingMoreExamples';
import BasicScrollView from './Session05/ListView/BasicScrollView';
import ScrollViewExamples from './Session05/ListView/ScrollViewExamples';
import FlatListExamples from './Session05/ListView/FlatListExamples';
import SectionListExamples from './Session05/ListView/SectionListExamples';
// PRACTICE
import GalleryHomework from './Session05/Practices/GalleryHomework';
import GetUsers from './Session05/Practices/GetUsers';
import Login from './Session05/Practices/Login';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				{/* <LoginScreen /> */}
				{/* <StateExample /> */}
				{/* <GenderComponent /> */}
				{/* <ConditionalRender /> */}
				{/* <StyleExample /> */}
				{/* <FlexLayout /> */}
				{/* <Instagram /> */}
				{/* <Instagram2 /> */}

				{/* SESSION 05 */}
				{/* <BasicNetworking /> */}
				{/* <Networking /> */}
				{/* <NetworkingMoreExamples /> */}
				{/* <BasicScrollView /> */}
				{/* <ScrollViewExamples /> */}
				{/* <FlatListExamples /> */}
				{/* <SectionListExamples /> */}
				{/* <GalleryHomework /> */}
				<GetUsers />
				{/* <Login /> */}
			</SafeAreaView>
		);
	}
}
