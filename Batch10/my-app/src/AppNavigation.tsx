import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigators/RootStackNavigator';

type Props = {};

const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
