import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { useTheme } from 'react-native-paper';
import MainScreen from './MainScreen';
// import colors from '../../../../constants/colors';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  // const { colors } = useTheme();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SSL_Parent_Home_MainScreen" component={MainScreen} options={{ title: 'Trang chủ' }} />
    </Stack.Navigator>
  );
}
