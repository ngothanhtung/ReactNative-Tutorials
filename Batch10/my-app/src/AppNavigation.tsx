import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import OnboardingStackNavigator from './OnboardingStackNavigator';

type Props = {};

const AppNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <OnboardingStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
