import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator({
  LoginScreen: LoginScreen
});