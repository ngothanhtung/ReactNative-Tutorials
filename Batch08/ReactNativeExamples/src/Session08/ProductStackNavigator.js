import React from 'react';

// Navigators
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProductsScreen from './screens/ProductsScreen';
import Products1Screen from './screens/Products1Screen';
import Products2Screen from './screens/Products2Screen';
import ProductDetailScreen from './screens/ProductDetailScreen';

// Create stack navigator
const Stack = createStackNavigator();

export default function ProductStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          title: 'Products',
          headerStyle: { backgroundColor: 'white' },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Products1"
        component={Products1Screen}
        options={{
          title: 'Products #1',
          headerStyle: { backgroundColor: 'white' },
          headerShown: false,
        }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />

      <Stack.Screen
        name="Products2"
        component={Products2Screen}
        options={{
          title: 'Products #2',
          headerStyle: { backgroundColor: 'white' },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
