import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductStackNavigator from './ProductStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
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
        name="ProductStackNavigator"
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
          title: 'Notitications',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="bell" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="account" size={24} style={{color: color}} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
