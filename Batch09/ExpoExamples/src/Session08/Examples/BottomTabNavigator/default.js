import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Feather as Feather } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import CartScreen from './screens/CartScreen';
import NotificationScreen from './screens/NotificationScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false, style: { height: 88 } }}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          tabBarButton: (props) => {
            return (
              <TouchableOpacity {...props} style={styles.tabButtonContainer}>
                <View style={styles.tabButton}>
                  <Feather name='home' size={24} />
                  <Text>sdsd</Text>
                </View>
              </TouchableOpacity>
            );
          },
          // tabBarIcon: ({ focused, color, size }) => <Feather name='home' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Feather name='search' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Feather name='shopping-bag' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name='FavouriteScreen'
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Feather name='heart' size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name='NotificationScreen'
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => <Feather name='bell' size={size} color={color} />,
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
  label: {
    color: 'white',
  },
});
