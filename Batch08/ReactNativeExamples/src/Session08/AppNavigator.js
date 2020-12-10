import React from 'react';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';

// Navigators
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <StackNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
