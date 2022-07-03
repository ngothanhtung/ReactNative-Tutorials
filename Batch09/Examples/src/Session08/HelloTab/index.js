import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Search from './screens/Search';
import Cart from './screens/Cart';
import Favourite from './screens/Favourite';
import Notification from './screens/Notification';

const Tab = createBottomTabNavigator();

export default function HelloTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#222f3e',
        tabBarActiveTintColor: '#ff9f43',
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ size, color, focused }) => {
            let iconName = 'home-outline';
            if (focused) {
              iconName = 'home';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Cart' component={Cart} />
      <Tab.Screen name='Favourite' component={Favourite} />
      <Tab.Screen name='Notification' component={Notification} />
    </Tab.Navigator>
  );
}
