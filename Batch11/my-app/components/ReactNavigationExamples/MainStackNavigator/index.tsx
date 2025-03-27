import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from '../StackNavigator';
import TabNavigator from '../TabNavigation';
import DrawerNavigator from '../DrawerNavigator';

const Stack = createNativeStackNavigator();

type Props = {};

const MainStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="StackNavigator" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
