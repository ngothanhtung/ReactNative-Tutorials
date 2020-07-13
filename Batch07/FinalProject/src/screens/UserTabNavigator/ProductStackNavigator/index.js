import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductsScreen from './ProductsScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

const Stack = createStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{title: 'Sản phẩm', headerShown: true}}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{title: 'Chi tiết', headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
