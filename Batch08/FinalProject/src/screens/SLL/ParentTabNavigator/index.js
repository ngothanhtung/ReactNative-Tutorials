/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import HomeStackNavigator from './HomeStackNavigator';
import ScoreStackNavigator from './ScoreStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import HealthStackNavigator from './HealthStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';
import colors from '../../../constants/colors';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  const { colors: themeColors } = useTheme();

  return (
    <Tab.Navigator
      shifting={false}
      activeColor={themeColors.primary}
      inactiveColor={colors.PRIMARY_FONT}
      barStyle={{
        backgroundColor: 'white',
      }}>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* HOME */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="SSL_Parent_HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Trang chủ</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'home' : 'home-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
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
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Bảng điểm</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
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
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Thông báo</Text>,
          tabBarBadge: 9,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'bell' : 'bell-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
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
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Sức khỏe</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'clipboard-pulse' : 'clipboard-pulse-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
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
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Tài khoản</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'account' : 'account-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
