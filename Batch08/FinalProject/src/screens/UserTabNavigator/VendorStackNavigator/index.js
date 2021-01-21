import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import VendorsScreen from './VendorsScreen';
import VendorDetailsScreen from './VendorDetailsScreen';

const Stack = createStackNavigator();

const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VendorsScreen"
        component={VendorsScreen}
        options={{title: 'Nhà cung cấp', headerShown: true}}
      />
      <Stack.Screen
        name="VendorDetailsScreen"
        component={VendorDetailsScreen}
        options={{title: 'Chi tiết', headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default ServiceStackNavigator;
