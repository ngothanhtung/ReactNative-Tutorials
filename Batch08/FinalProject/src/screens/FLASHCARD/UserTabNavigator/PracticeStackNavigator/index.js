import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import FlashCardScreen from './FlashCardScreen';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

export default function HealthStackNavigator() {
  const { colors: themeColors } = useTheme();

  return (
    <Stack.Navigator
      // headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.primary,
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
        },
      }}>
      <Stack.Screen name="FLASHCARD_User_Practice_MainScreen" component={MainScreen} options={{ title: 'Categories', headerShown: false }} />
      <Stack.Screen
        name="FLASHCARD_User_Practice_FlashCardScreen"
        component={FlashCardScreen}
        initialParams={{ name: 'FLASH CARD' }}
        options={({ route }) => ({ title: route.params.category.name.toUpperCase(), headerShown: true, headerBackTitleVisible: false })}
      />
    </Stack.Navigator>
  );
}
