import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="FLASHCARD_User_Account_MainScreen" component={MainScreen} options={{ title: 'Sổ điểm', headerShown: false }} />
    </Stack.Navigator>
  );
}
