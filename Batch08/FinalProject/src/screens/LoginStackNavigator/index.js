import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import SignInScreen from './SignInScreen';
import SignInWithPhoneScreen from './SignInWithPhoneScreen';

const Stack = createStackNavigator();

export default function LoginStackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignInWithPhoneScreen" component={SignInWithPhoneScreen} />
    </Stack.Navigator>
  );
}
