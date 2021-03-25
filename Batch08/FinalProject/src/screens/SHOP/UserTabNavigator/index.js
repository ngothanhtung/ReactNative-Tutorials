import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';

import HomeStackNavigator from './HomeStackNavigator';
import CategoryStackNavigator from './CategoryStackNavigator';
import NewsfeedStackNavigator from './NewsfeedStackNavigator';
import ChatStackNavigator from './ChatStackNavigator';
import AccountStackNavigator from './AccountStackNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  // Redux hooks
  const addedServices = useSelector((state) => state.main.shoppingCart.addedServices);

  const { colors } = useTheme();

  return (
    <Tab.Navigator shifting={false} barStyle={{ backgroundColor: colors.primary }}>
      <Tab.Screen
        name="SHOP_User_HomeStackNavigator"
        component={HomeStackNavigator}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="home" size={24} style={{ color: color }} />;
          },
        }}
      />

      <Tab.Screen
        name="SHOP_User_CategoryStackNavigator"
        component={CategoryStackNavigator}
        options={{
          title: 'Danh mục',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="apps" size={24} style={{ color: color }} />;
          },
        }}
      />

      <Tab.Screen
        name="SHOP_User_NewsfeedStackNavigator"
        component={NewsfeedStackNavigator}
        options={{
          title: 'Lướt',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="bell" size={24} style={{ color: color }} />;
          },
        }}
      />

      <Tab.Screen
        name="SHOP_User_ChatStackNavigator"
        component={ChatStackNavigator}
        options={{
          title: 'Chat',
          tabBarBadge: addedServices.length === 0 ? null : addedServices.length,
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="cart" size={24} style={{ color: color }} />;
          },
        }}
      />

      <Tab.Screen
        name="SHOP_User_AccountStackNavigator"
        component={AccountStackNavigator}
        options={{
          title: 'Cá nhân',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="account" size={24} style={{ color: color }} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
