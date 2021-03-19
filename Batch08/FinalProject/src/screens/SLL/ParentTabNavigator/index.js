/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import HomeStackNavigator from './HomeStackNavigator';
import ScoreStackNavigator from './ScoreStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import HealthStackNavigator from './HealthStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.primary}
      inactiveColor="#A3A3AE"
      barStyle={{
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 4,
        // marginTop: 0,
      }}>
      {/* <Tab.Navigator shifting={false} activeColor={'white'} inactiveColor="#bdc3c7" barStyle={{ backgroundColor: colors.primary }}> */}
      {/* --------------------------------------------------------------------------------------------- */}
      {/* HOME */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="home" size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* SCORE */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_ScoreStackNavigator"
        component={ScoreStackNavigator}
        options={{
          tabBarLabel: 'Sổ điểm',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="book-open" size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* NOTIFICATION */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_NotificationStackNavigator"
        component={NotificationStackNavigator}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarBadge: 9,
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="bell" size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* HEALTH */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_HealthStackNavigator"
        component={HealthStackNavigator}
        options={{
          tabBarLabel: 'Sức khỏe',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="heart-pulse" size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* ACCOUNT */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_AccountStackNavigator"
        component={AccountStackNavigator}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="account" size={24} style={{ color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
