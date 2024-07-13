import { StyleSheet, Text, View } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Menu1Screen from './screens/Menu1';
import Menu2Screen from './screens/Menu2';
import TabNavigator from '../TabNavigator';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label='Change password'
        labelStyle={{ fontWeight: '700', color: 'black' }}
        icon={({ color, size }) => <Icon color={'black'} size={size} name='lock' />}
        onPress={() => {
          console.log('Change password');
          props.navigation.closeDrawer();
        }}
      />

      <DrawerItem
        label='Sign out'
        labelStyle={{ fontWeight: '700', color: 'black' }}
        icon={({ color, size }) => <Icon color={'black'} size={size} name='log-out' />}
        onPress={() => {
          console.log('Sign out');
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

type Props = {};

const CustomDrawerNavigator = (props: Props) => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: 'left', drawerActiveBackgroundColor: '#FF6C44', drawerActiveTintColor: '#ffffff', drawerInactiveTintColor: '#111A2C', drawerLabelStyle: { fontWeight: '700' } }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={TabNavigator} options={{ title: 'Home', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='home' /> }} />
      <Drawer.Screen name='Menu1' component={Menu1Screen} options={{ title: 'Settings', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='settings' /> }} />
      <Drawer.Screen name='Menu2' component={Menu2Screen} options={{ title: 'Profile', drawerIcon: ({ color, size }) => <Icon color={color} size={size} name='user' /> }} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({});
