import * as React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import AccountScreen from './screens/AccountScreen';
import ProductStackNavigator from './ProductStackNavigator';
import MenuScreen from './MenuStackNavigator';
import MenuStackNavigator from './MenuStackNavigator';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabNavigator() {
  return (
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
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="ProductsScreen"
        component={ProductStackNavigator}
        options={{
          title: 'Products',
          tabBarIcon: ({color}) => {
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
          tabBarIcon: ({color}) => {
            return <Icon name="bell" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({color}) => {
            return <Icon name="account" size={24} style={{color: color}} />;
          },
        }}
      />
      <Tab.Screen
        name="MenuStackNavigator"
        component={MenuStackNavigator}
        options={{
          title: 'Menu',
          tabBarIcon: ({color}) => {
            return (
              <Octicon name="three-bars" size={24} style={{color: color}} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
