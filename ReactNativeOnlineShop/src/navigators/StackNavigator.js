import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import AnimationScreen from '../screens/AnimationScreen';
import LoadingScreen from '../screens/LoadingScreen';

export default createStackNavigator({
  LoadingScreen: {
    screen: LoadingScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Loading',
      header: null
    }),
  },
  LoginScreen: LoginScreen,
  AnimationScreen: AnimationScreen,
});