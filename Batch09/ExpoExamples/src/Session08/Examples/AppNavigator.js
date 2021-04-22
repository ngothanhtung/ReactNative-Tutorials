import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
