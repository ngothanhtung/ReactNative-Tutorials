import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';

const Tab = createMaterialTopTabNavigator();

const ICON_SIZE = 24;
const ACTIVE_COLOR = '#FF6C44';
const INACTIVE_COLOR = '#898B9A';

export default function MaterialTopTabNavigator() {
  return (
    <Tab.Navigator
      tabBarPosition='top'
      tabBarOptions={{
        activeTintColor: ACTIVE_COLOR,
        inactiveTintColor: INACTIVE_COLOR,
        style: { backgroundColor: 'white' },
        labelStyle: { textTransform: 'none', fontSize: 13 },
        scrollEnabled: true,
        showIcon: true,
        showLabel: true,
        tabStyle: { width: 110 },
        indicatorStyle: {
          backgroundColor: ACTIVE_COLOR,
        },
      }}
      sceneContainerStyle={{ backgroundColor: 'gray' }}
    >
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'home' : 'home-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cart' : 'cart-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'cart' : 'cart-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          title: 'Favourite',
          tabBarIcon: ({ focused, color }) => <Icon name={focused ? 'heart' : 'heart-outline'} size={ICON_SIZE} color={color} />,
        }}
      />
      <Tab.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          title: 'Notifications',
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
