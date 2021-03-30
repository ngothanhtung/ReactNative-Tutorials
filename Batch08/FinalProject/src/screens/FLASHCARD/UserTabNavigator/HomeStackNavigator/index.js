import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="FLASHCARD_User_Home_MainScreen" component={MainScreen} options={{ title: 'Trang chủ' }} />
    </Stack.Navigator>
  );
}
