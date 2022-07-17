import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';
import BottomTabNavigator from '../TabNavigators/BottomTabNavigator';
import MaterialBottomTabNavigator from '../TabNavigators/MaterialBottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'left', headerShown: true, drawerActiveBackgroundColor: '#FF6C44', drawerActiveTintColor: '#ffffff', drawerInactiveTintColor: '#111A2C', drawerLabelStyle: { fontWeight: '700' } }}>
      <Drawer.Screen name='Home' component={MaterialBottomTabNavigator} options={{ headerShown: true, title: 'EatMe', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='home' /> }} />
      <Drawer.Screen name='Menu1' component={Menu1Screen} options={{ title: 'Settings', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='settings' /> }} />
      <Drawer.Screen name='Menu2' component={Menu2Screen} options={{ title: 'Profile', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='user' /> }} />
    </Drawer.Navigator>
  );
}
