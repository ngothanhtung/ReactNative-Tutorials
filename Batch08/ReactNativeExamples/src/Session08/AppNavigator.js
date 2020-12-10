/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#2c3e50' }}>
        {/* <StackNavigator /> */}
        <TabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
