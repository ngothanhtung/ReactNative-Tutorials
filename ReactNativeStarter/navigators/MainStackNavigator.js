import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import CreateAccountScreen1 from './CreateAccountScreen1';
import CreateAccountScreen2 from './CreateAccountScreen2';
import LoginScreen1 from './LoginScreen1';
import LoginScreen2 from './LoginScreen2';

import MainTabNavigator from './MainTabNavigator';

class MainStackNavigator extends React.Component {
  Stack = StackNavigator({
    Home: {
      screen: HomeScreen
    },
    CreateAccount1: {
      screen: CreateAccountScreen1
    },
    CreateAccount2: {
      screen: CreateAccountScreen2
    },
    Login1: {
      screen: LoginScreen1
    },
    Login2: {
      screen: LoginScreen2
    },
    About: {
      screen: AboutScreen
    },
    Tab: {
      screen: MainTabNavigator
    }
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <this.Stack />
    );
  }
}

export default MainStackNavigator;