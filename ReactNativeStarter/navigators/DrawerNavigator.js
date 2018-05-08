import React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import MoreScreen1 from './MoreScreen1';
import MoreScreen2 from './MoreScreen2';

export default createDrawerNavigator({
  More1: {
    screen: MoreScreen1
  },
  More2: {
    screen: MoreScreen2
  }
});
