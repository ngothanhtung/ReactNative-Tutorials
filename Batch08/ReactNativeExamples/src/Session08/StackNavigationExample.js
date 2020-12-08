import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

import Products2Screen from './screens/Products2Screen';

const Stack = createStackNavigator();

export default function StackNavigationExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products2">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            title: 'Products',
            headerStyle: { backgroundColor: 'white' },
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: 'Product Detail' }}
        />

        <Stack.Screen
          name="Products2"
          component={Products2Screen}
          options={{
            title: 'Products 2',
            headerStyle: { backgroundColor: 'white' },
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
