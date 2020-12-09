import React from 'react';

// Navigators
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Products1Screen from './screens/Products1Screen';
import Products2Screen from './screens/Products2Screen';
import ProductDetailScreen from './screens/ProductDetailScreen';

// Create stack navigator
const Stack = createStackNavigator();

export default function StackNavigationExample() {
  return (
    <Stack.Navigator initialRouteName="Products2">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Products1"
        component={Products1Screen}
        options={{
          title: 'Products #1',
          headerStyle: { backgroundColor: 'white' },
          headerShown: true,
        }}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Detail' }} />

      <Stack.Screen
        name="Products2"
        component={Products2Screen}
        options={{
          title: 'Products #2',
          headerStyle: { backgroundColor: 'white' },
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
