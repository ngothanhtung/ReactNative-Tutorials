import React, { Component } from 'react'
import { Text, View } from 'react-native'
import StackNavigator from './screens/StackNavigator'
import TabNavigator from './screens/TabNavigator'
import SwitchNavigator from './screens/SwitchNavigator'

import { createAppContainer } from 'react-navigation'
// const AppNavigator = createAppContainer(StackNavigator);
// const AppNavigator = createAppContainer(TabNavigator);
const AppNavigator = createAppContainer(SwitchNavigator);

export default class index extends Component {
  render() {
    return (
      <AppNavigator />
      // <StackNavigator />
    )
  }
}
