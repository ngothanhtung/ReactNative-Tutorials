import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Feather as Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import HomeStackNavigator from './screens/HomeStackNavigator';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';

const ICON_SIZE = 24;
const ACTIVE_COLOR = '#FF6C44';
const INACTIVE_COLOR = '#898B9A';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator_Eatme() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
      <Tab.Navigator tabBarOptions={{ showLabel: false, style: { height: 88, paddingHorizontal: 24, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: '#ffffff' } }} sceneContainerStyle={{ backgroundColor: '#FBFBFB' }}>
        <Tab.Screen
          name='HomeStackNavigator'
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name='home' size={size * 0.8} color='white' />
                    <Text style={styles.label}>Home</Text>
                  </View>
                );
              } else {
                return <Feather name='home' size={size * 0.8} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='SearchScreen'
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name='search' size={size * 0.8} color='white' />
                    <Text style={styles.label}>Search</Text>
                  </View>
                );
              } else {
                return <Feather name='search' size={size * 0.8} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='CartScreen'
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name='shopping-bag' size={size * 0.8} color='white' />
                    <Text style={styles.label}>Cart</Text>
                  </View>
                );
              } else {
                return <Feather name='shopping-bag' size={size * 0.8} color={color} />;
              }
            },
          }}
        />
        <Tab.Screen
          name='FavouriteScreen'
          component={FavouriteScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name='heart' size={size * 0.8} color='white' />
                    <Text style={styles.label}>Fav</Text>
                  </View>
                );
              } else {
                return <Feather name='heart' size={size * 0.8} color={color} />;
              }
            },
          }}
        />

        <Tab.Screen
          name='NotificationScreen'
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              if (focused) {
                return (
                  <View style={styles.tabButton}>
                    <Feather name='bell' size={size * 0.8} color='white' />
                    <Text style={styles.label}>Alert</Text>
                  </View>
                );
              } else {
                return <Feather name='bell' size={size * 0.8} color={color} />;
              }
            },
          }}
        />
      </Tab.Navigator>
    </View>
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
    minWidth: 90,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#FF6C44',
  },
  label: {
    marginLeft: 8,
    color: 'white',
    fontFamily: 'SVN-Gilroy-Medium',
    // fontSize: 14,
  },
});
