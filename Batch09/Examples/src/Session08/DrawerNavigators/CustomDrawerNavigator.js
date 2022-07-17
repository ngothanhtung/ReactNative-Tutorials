/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import BottomTabNavigator from '../TabNavigators/BottomTabNavigator';
import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label='Sign out'
        labelStyle={{ fontWeight: '700' }}
        icon={({ color, size }) => <Icon color={color} size={size} name='log-out' />}
        onPress={() => {
          console.log('Sign out');
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ drawerPosition: 'left', drawerActiveBackgroundColor: '#FF6C44', drawerActiveTintColor: '#ffffff', drawerInactiveTintColor: '#111A2C', drawerLabelStyle: { fontWeight: '700' } }} drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Home' component={BottomTabNavigator} options={{ title: 'Home', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='home' /> }} />
      <Drawer.Screen name='Menu1' component={Menu1Screen} options={{ title: 'Settings', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='settings' /> }} />
      <Drawer.Screen name='Menu2' component={Menu2Screen} options={{ title: 'Profile', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='user' /> }} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
