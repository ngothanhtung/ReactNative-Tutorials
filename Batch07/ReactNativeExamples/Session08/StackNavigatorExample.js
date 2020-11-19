import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createStackNavigator();

const StackNavigatorExample = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // headerMode="none"
        initialRouteName="LoginScreen"
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
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Đăng nhập', headerShown: false}}
        />
        <Stack.Screen
          initialParams={{message: 'Init text'}}
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Đăng ký',
            headerBackTitle: 'Quay lại',
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Trang chính'}}
        />
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
    </NavigationContainer>
  );
};

export default StackNavigatorExample;
