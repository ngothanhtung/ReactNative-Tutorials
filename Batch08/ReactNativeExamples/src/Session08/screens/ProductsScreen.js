import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Products1Screen from './Products1Screen';
import Products2Screen from './Products2Screen';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function ProductsScreen() {
  return (
    <SafeAreaView flex={1}>
      <Tab.Navigator>
        <Tab.Screen name="Products1" component={Products1Screen} />
        <Tab.Screen name="Products2" component={Products2Screen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
