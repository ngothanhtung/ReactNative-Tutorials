import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import VendorStackNavigator from './VendorStackNavigator';
import ServiceStackNavigator from './ServiceStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator shifting={false}>
      <Tab.Screen
        name="VendorStackNavigator"
        component={VendorStackNavigator}
        options={{
          title: 'Vendors',
          tabBarIcon: ({focused, color}) => {
            return <Icon name="home" size={24} style={{color: color}} />;
          },
        }}
      />

      <Tab.Screen
        name="ServiceStackNavigator"
        component={ServiceStackNavigator}
        options={{
          title: 'Services',
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
