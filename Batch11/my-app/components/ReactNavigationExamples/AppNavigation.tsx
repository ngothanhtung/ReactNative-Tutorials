import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigation';
import MainStackNavigator from './MainStackNavigator';
import DrawerNavigator from './DrawerNavigator';

type Props = {};

const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      <MainStackNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigation;
