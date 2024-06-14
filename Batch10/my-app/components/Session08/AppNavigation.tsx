import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import CustomDrawerNavigator from './CustomDrawerNavigator';

type Props = {};

const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <TabNavigator /> */}
      {/* <DrawerNavigator /> */}
      <CustomDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
