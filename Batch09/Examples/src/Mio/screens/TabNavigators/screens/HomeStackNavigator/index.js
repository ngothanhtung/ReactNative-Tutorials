import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ListScreen' component={ListScreen} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
    </Stack.Navigator>
  );
}
