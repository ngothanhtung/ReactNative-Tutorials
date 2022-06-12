import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode='screen'>
      <Stack.Screen name='List' component={ListScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
    </Stack.Navigator>
  );
}
