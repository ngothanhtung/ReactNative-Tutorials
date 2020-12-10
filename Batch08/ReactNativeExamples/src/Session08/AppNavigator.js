import React from 'react';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

// Navigators
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
