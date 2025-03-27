import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationsScreen from './screens/NotificationsScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();
type Props = {};

const NotificationsTopTabNavigator = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => {
              return <Feather name="bell" size={24} color={color} />;
            },
          }}
        />
        <Tab.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default NotificationsTopTabNavigator;
