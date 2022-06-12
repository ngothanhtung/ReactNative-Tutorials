import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';
import BottomTabNavigator from '../TabNavigators/BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerPosition='right' drawerContentOptions={{ activeBackgroundColor: '#FF6C44', activeTintColor: '#ffffff', inactiveTintColor: '#111A2C', labelStyle: { fontWeight: '700' } }}>
      <Drawer.Screen name='Home' component={BottomTabNavigator} options={{ title: 'Home', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='home' /> }} />
      <Drawer.Screen name='Menu1' component={Menu1Screen} options={{ title: 'Settings', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='settings' /> }} />
      <Drawer.Screen name='Menu2' component={Menu2Screen} options={{ title: 'Profile', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='user' /> }} />
    </Drawer.Navigator>
  );
}
