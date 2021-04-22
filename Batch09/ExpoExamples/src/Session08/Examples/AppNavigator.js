import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import BottomTabNavigator_Eatme from './BottomTabNavigator/Eatme';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <BottomTabNavigator /> */}
      <BottomTabNavigator_Eatme />
    </NavigationContainer>
  );
}
