import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';

import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';
import BottomTabNavigator_Eatme from './BottomTabNavigator/BottomTabNavigator_Eatme';
import MaterialBottomTabNavigator from './BottomTabNavigator/MaterialBottomTabNavigator';
import MaterialBottomTabNavigator_Eatme from './BottomTabNavigator/MaterialBottomTabNavigator_Eatme';
import MaterialTopTabNavigator from './BottomTabNavigator/MaterialTopTabNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      {/* <BottomTabNavigator_Eatme /> */}
      {/* <MaterialBottomTabNavigator /> */}
      {/* <MaterialBottomTabNavigator_Eatme /> */}
      <MaterialTopTabNavigator />
    </NavigationContainer>
  );
}
