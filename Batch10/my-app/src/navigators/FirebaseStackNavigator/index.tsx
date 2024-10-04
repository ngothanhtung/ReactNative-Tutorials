import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExamplesScreen from './screens/ExamplesScreen';
import { FirebaseStackParamList } from './FirebaseStackParamList';

const Stack = createNativeStackNavigator<FirebaseStackParamList>();

type Props = {};

const FirebaseStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='Examples'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Examples' component={ExamplesScreen} />
    </Stack.Navigator>
  );
};

export default FirebaseStackNavigator;
