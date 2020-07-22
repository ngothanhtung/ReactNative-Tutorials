import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ServicesScreen from './ServicesScreen';
import ServiceDetailsScreen from './ServiceDetailsScreen';

const Stack = createStackNavigator();

const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{title: 'Dịch vụ', headerShown: true}}
      />
      <Stack.Screen
        name="ServiceDetailsScreen"
        component={ServiceDetailsScreen}
        options={{title: 'Chi tiết', headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default ServiceStackNavigator;
