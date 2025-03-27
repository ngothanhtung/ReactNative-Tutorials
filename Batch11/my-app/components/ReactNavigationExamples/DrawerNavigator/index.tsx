import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import TabNavigator from '../TabNavigation';

const Drawer = createDrawerNavigator();

type Props = {};

const DrawerNavigator = (props: Props) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          title: 'Tab',
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: 'Products',
        }}
      />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Product Details',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
