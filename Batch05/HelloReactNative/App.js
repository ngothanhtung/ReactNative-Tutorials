import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
// import Header from './components/Header';
// import Post from './components/Post';
// import Button from './components/Button';
// import LoginScreen from './Login/LoginScreen';
// import TextBox from './Session03/TypeChecking/TextBox';
// import Button from './Session03/TypeChecking/Button';
// import StateExample from './Session03/StateExample';
// import ConditionalRender from './Session03/ConditionalRender';
// import GenderComponent from './Session03/GenderComponent';
// import StyleExample from './Session04/StyleExample';
// import FlexLayout from './Session04/FlexLayout';
// import Instagram from './Session04/Instagram';
// import Instagram2 from './Session04/Instagram2';
// SESSION 05
// //
// import BasicNetworking from './Session05/Networking/BasicNetworking';
// import Networking from './Session05/Networking/Networking';
// import NetworkingMoreExamples from './Session05/Networking/NetworkingMoreExamples';
// import BasicScrollView from './Session05/ListView/BasicScrollView';
// import ScrollViewExamples from './Session05/ListView/ScrollViewExamples';
// import FlatListExamples from './Session05/ListView/FlatListExamples';
// import SectionListExamples from './Session05/ListView/SectionListExamples';
// // PRACTICE
// import GalleryHomework from './Session05/Practices/GalleryHomework';
// import GetUsers from './Session05/Practices/GetUsers';
// import Login from './Session05/Practices/Login';
// import LoginV2 from './Session05/Practices/LoginV2';
// // SESSION 06
// // import StackNavigator from './Session06/StackNavigator';
// import TabNavigator from './Session06/screens/TabNavigator';
// import DrawerNavigator from './Session06/screens/DrawerNavigator';
// import SwitchNavigator from './Session06/screens/SwitchNavigator';
// SESSION 08

import Session08 from './session08/index';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'admin',
		};
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
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
				{/* <GetUsers /> */}
				{/* <Login /> */}
				{/* <LoginV2 /> */}
				{/* <TextBox
					onTyping={text => {
						this.setState({ username: text });
					}}
				/>
				<Text>{this.state.username}</Text>
				<Button
					title='Ok'
					onTouch={() => {
						alert('OK');
					}}
				/> */}
				{/* <StackNavigator /> */}
				{/* <TabNavigator /> */}
				{/* <DrawerNavigator /> */}
				{/* <SwitchNavigator /> */}
				<Session08 />
			</View>
		);
	}
}
