import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

type Props = {};

const OnlineShopNavigation = (props: Props) => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default OnlineShopNavigation;
