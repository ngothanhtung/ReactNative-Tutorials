import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen1 from './LoginScreen1';
import LoginScreen2 from './LoginScreen2';

export default createStackNavigator({
  Login1: {
    screen: LoginScreen1
  },
  Login2: {
    screen: LoginScreen2
  }
});
