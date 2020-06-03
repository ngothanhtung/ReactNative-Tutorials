import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';
import ProductStackNavigator from './ProductStackNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: '#0984e3'}}
        shifting={false}
        tabBarOptions={{
          activeColor: '#ffffff',
          inactiveColor: '#dfe6e9',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="home" size={24} style={{color: color}} />;
            },
          }}
        />
        <Tab.Screen
          name="ProductsScreen"
          component={ProductStackNavigator}
          options={{
            title: 'Products',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="apps" size={24} style={{color: color}} />;
            },
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            title: 'Notifications',
            tabBarBadge: 9,
            tabBarIcon: ({focused, color}) => {
              return <Icon name="bell" size={24} style={{color: color}} />;
            },
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="account" size={24} style={{color: color}} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
