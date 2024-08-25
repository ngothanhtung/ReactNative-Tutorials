import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from '../AuthStackNavigator';
import ChatStackNavigator from '../ChatStackNavigator';
import OnboardingStackNavigator from '../OnboardingStackNavigator';
import WorkspaceStackNavigator from '../WorkspaceStackNavigator';
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
      <Stack.Screen name='WorkspaceStackNavigator' component={WorkspaceStackNavigator} />
      <Stack.Screen name='ChatStackNavigator' component={ChatStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
