/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import HomeStackNavigator from './HomeStackNavigator';
import BattleStackNavigator from './BattleStackNavigator';
import NotificationStackNavigator from './NotificationStackNavigator';
import PracticeStackNavigator from './PracticeStackNavigator';
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
        name="FLASHCARD_User_HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Home</Text>,
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
        name="FLASHCARD_User_BattleStackNavigator"
        component={BattleStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Battle</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'gamepad-circle' : 'gamepad-circle-outline';
            return <Icon name={iconName} size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* NOTIFICATION */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="FLASHCARD_User_NotificationStackNavigator"
        component={NotificationStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Notifications</Text>,
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
        name="FLASHCARD_User_PracticeStackNavigator"
        component={PracticeStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Practice</Text>,
          tabBarIcon: ({ focused, color }) => {
            let iconName = focused ? 'insert-chart' : 'insert-chart-outlined';
            return <MIcon name={iconName} size={24} style={{ color }} />;
          },
        }}
      />
      {/* --------------------------------------------------------------------------------------------- */}
      {/* ACCOUNT */}
      {/* --------------------------------------------------------------------------------------------- */}
      <Tab.Screen
        name="FLASHCARD_User_AccountStackNavigator"
        component={AccountStackNavigator}
        options={{
          tabBarLabel: <Text style={{ fontFamily: 'Roboto-Medium', textAlign: 'center' }}>Account</Text>,
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
