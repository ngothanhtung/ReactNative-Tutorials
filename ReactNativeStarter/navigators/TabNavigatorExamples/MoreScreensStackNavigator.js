import React from 'react';
import { createStackNavigator } from 'react-navigation';

import MoreScreen1 from './MoreScreen1';
import MoreScreen2 from './MoreScreen2';

const routeConfigs = {
  MoreScreen1: {
    screen: MoreScreen1
  },
  MoreScreen2: {
    screen: MoreScreen2
  }
};

const stackNavigatorConfig = {
  // headerMode: 'none'
};

export default createStackNavigator(routeConfigs, stackNavigatorConfig);
