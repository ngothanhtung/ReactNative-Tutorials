import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Stack Navigators

import StackNavigator from './StackNavigator';

// Tab Navigators
// import BottomTabNavigator from './TabNavigators/BottomTabNavigator';
// import MaterialBottomTabNavigator from './TabNavigators/MaterialBottomTabNavigator';
// import MaterialTopTabNavigator from './TabNavigators/MaterialTopTabNavigator';

// Drawer Navigators
// import CustomDrawerNavigator from './DrawerNavigators/CustomDrawerNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />

      {/* TAB NAVIGATORS */}
      {/* <BottomTabNavigator /> */}
      {/* <BottomTabNavigator_Eatme /> */}
      {/* <MaterialBottomTabNavigator /> */}
      {/* <MaterialBottomTabNavigator_Eatme /> */}
      {/* <MaterialTopTabNavigator /> */}

      {/* DRAWER NAVIGATORS */}
      {/* <DrawerNavigator /> */}
      {/* <CustomDrawerNavigator /> */}
    </NavigationContainer>
  );
}
