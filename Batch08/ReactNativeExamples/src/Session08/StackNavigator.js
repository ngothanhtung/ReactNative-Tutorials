import React from 'react';

// Navigators
import { createStackNavigator } from '@react-navigation/stack';

// Screens

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import TabNavigator from './TabNavigator';
// import DrawerNavigator from './DrawerNavigator';

// Create stack navigator
const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="Tab" component={TabNavigator} /> */}
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}
