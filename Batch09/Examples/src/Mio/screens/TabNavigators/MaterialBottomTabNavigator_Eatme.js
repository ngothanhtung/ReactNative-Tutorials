import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';

const ICON_SIZE = 24;
const ACTIVE_COLOR = '#FF6C44';
const INACTIVE_COLOR = '#898B9A';

const Tab = createMaterialBottomTabNavigator();

export default function MaterialBottomTabNavigator_Eatme() {
  return (
    <Tab.Navigator shifting={false} style={{ backgroundColor: '#FAFAFA' }} barStyle={{ height: 88, paddingHorizontal: 24, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: '#ffffff', justifyContent: 'center' }} initialRouteName='HomeScreen' backBehavior='history' activeColor={ACTIVE_COLOR} inactiveColor={INACTIVE_COLOR}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'home' : 'home-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cloud-search' : 'cloud-search-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cart' : 'cart-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'heart' : 'heart-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'bell' : 'bell-outline'} size={ICON_SIZE} color={color} />,
          tabBarBadge: 9,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 90,
    borderRadius: 45,
    backgroundColor: '#FF6C44',
  },
  label: {},
});
