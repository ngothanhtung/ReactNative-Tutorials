import { View, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
import ChangePassword from './screens/ChangePassword';
import ViewDetails from './screens/ViewDetails';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ViewDetails' component={ViewDetails} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
