import { View, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import ProfileStack from './screens/ProfileStack';

const Stack = createStackNavigator();

const HelloStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'violet',
        },
        headerBackTitle: 'Quay lại',
        headerBackTitleStyle: { color: 'white' },
        headerTintColor: 'white',
        headerTitle: () => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Feather name='user' size={20} color='white' />
              <Text style={{ fontSize: 16, marginLeft: 12, color: 'white' }}>Đăng nhập</Text>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} initialParams={{ name: 'Unknown', score: 0 }} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Profile' component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default HelloStack;
