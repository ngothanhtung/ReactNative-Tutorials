import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from '../AuthStackNavigator';
import ChatStackNavigator from '../ChatStackNavigator';
import FirebaseStackNavigator from '../FirebaseStackNavigator';
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
      initialRouteName='FirebaseStackNavigator'
    >
      <Stack.Screen name='OnboardingStackNavigator' component={OnboardingStackNavigator} />
      <Stack.Screen name='AuthStackNavigator' component={AuthStackNavigator} />
      <Stack.Screen name='WorkspaceStackNavigator' component={WorkspaceStackNavigator} />
      <Stack.Screen name='ChatStackNavigator' component={ChatStackNavigator} />
      <Stack.Screen name='FirebaseStackNavigator' component={FirebaseStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
