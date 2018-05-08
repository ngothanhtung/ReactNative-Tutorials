import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import MainStackNavigator from './MainStackNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import LoginScreen1 from './LoginScreen1';
import LoginScreen2 from './LoginScreen2';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createSwitchNavigator({
  /* 
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  Stack: MainStackNavigator,
  Drawer: LoginScreen2,
});