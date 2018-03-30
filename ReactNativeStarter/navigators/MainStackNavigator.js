import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

class MainStackNavigator extends React.Component {
  Stack = StackNavigator(
    {
      Home: {
        screen: HomeScreen
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