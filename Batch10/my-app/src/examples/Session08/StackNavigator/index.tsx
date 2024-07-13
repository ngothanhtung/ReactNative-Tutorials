import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='Products'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'violet',
        },
        headerBackTitle: 'Quay lại',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Đăng nhập',
        }}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
