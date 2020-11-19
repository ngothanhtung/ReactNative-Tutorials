import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const StackNavigatorExample = () => {
  return (
    <Stack.Navigator
      // headerMode="none"

      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          title: 'Danh sách sản phẩm',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'yellow',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorExample;
