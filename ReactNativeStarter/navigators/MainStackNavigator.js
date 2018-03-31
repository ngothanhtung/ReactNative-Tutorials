import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import CreateAccountScreen from './CreateAccountScreen';
import LoginScreen1 from './LoginScreen1';
import LoginScreen2 from './LoginScreen2';

class MainStackNavigator extends React.Component {
  Stack = StackNavigator({
    Home: {
      screen: HomeScreen
    },
    CreateAccount: {
      screen: CreateAccountScreen
    },
    Login1: {
      screen: LoginScreen1
    },
    Login2: {
      screen: LoginScreen2
    },
    About: {
      screen: AboutScreen
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