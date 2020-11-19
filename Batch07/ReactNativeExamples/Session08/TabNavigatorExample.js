import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#0984e3',
          inactiveTintColor: '#2d3436',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({focused, color, size}) => {
              console.log(size);
              return (
                <Icon
                  name="home"
                  size={size}
                  style={{color: focused ? '#0984e3' : '#2d3436'}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{
            title: 'Products',
            tabBarIcon: ({focused, color, size}) => {
              console.log(size);
              return (
                <Icon
                  name="apps"
                  size={size}
                  style={{color: focused ? '#0984e3' : '#2d3436'}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            title: 'Account',
            tabBarIcon: ({focused, color, size}) => {
              console.log(size);
              return (
                <Icon
                  name="account"
                  size={size}
                  style={{color: focused ? '#0984e3' : '#2d3436'}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
