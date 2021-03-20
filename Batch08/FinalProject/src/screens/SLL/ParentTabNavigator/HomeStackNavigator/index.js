import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { useTheme } from 'react-native-paper';
import MainScreen from './MainScreen';
import ScheduleScreen from './ScheduleScreen';
// import colors from '../../../../constants/colors';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  // const { colors } = useTheme();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SSL_Parent_Home_MainScreen" component={MainScreen} options={{ title: 'Trang chủ' }} />
      <Stack.Screen name="SSL_Parent_Home_ScheduleScreen" component={ScheduleScreen} options={{ title: 'Thời khóa biều' }} />
    </Stack.Navigator>
  );
}
