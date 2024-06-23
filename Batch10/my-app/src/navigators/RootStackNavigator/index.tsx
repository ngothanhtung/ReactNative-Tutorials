import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from '../AuthStackNavigator';
import OnboardingStackNavigator from '../OnboardingStackNavigator';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='OnboardingStackNavigator' component={OnboardingStackNavigator} />
      <Stack.Screen name='AuthStackNavigator' component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
