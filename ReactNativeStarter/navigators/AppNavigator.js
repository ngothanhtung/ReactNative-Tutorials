import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = createSwitchNavigator({
  //Stack: StackNavigator,
  //Tab: TabNavigator,
  Drawer: DrawerNavigator,
});