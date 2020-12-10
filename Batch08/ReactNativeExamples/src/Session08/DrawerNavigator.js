import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Default" component={TabNavigator} /> */}
      <Drawer.Screen name="Menu1" component={Menu1Screen} />
      <Drawer.Screen name="Menu2" component={Menu2Screen} />
    </Drawer.Navigator>
  );
}
