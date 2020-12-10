/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Menu Item 1"
        labelStyle={{ fontWeight: '700' }}
        icon={({ color, size }) => <Icon color={color} size={size} name="home" />}
        onPress={() => {
          props.navigation.navigate('Menu1');
          props.navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Menu Item 2"
        labelStyle={{ fontWeight: '700' }}
        icon={({ color, size }) => <Icon color={color} size={size} name="account" />}
        onPress={() => {
          props.navigation.navigate('Menu2');
          props.navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
}

const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Menu1" component={Menu1Screen} />
      <Drawer.Screen name="Menu2" component={Menu2Screen} />
    </Drawer.Navigator>
  );
};

export default CustomDrawerNavigator;
