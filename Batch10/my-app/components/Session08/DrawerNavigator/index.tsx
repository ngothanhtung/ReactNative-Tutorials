import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import Menu1Screen from './screens/Menu1';
import Menu2Screen from './screens/Menu2';

const Drawer = createDrawerNavigator();

type Props = {};

const DrawerNavigator = (props: Props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Menu1'
        component={Menu1Screen}
        options={{
          title: 'Settings',
        }}
      />
      <Drawer.Screen
        name='Menu2'
        component={Menu2Screen}
        options={{
          title: 'Sign out',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
