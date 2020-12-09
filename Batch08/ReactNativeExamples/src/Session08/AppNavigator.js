import React from 'react';
import StackNavigationExample from './StackNavigationExample';

// Navigators
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigationExample />
    </NavigationContainer>
  );
};

export default AppNavigator;
