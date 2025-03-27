import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import { Button } from '@react-navigation/elements';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerRight: () => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <Button onPress={() => alert('This is a button!')}>Info</Button>
                <Button onPress={() => alert('This is a button!')}>Info</Button>
              </View>
            );
          },
          headerLeft: () => <Button onPress={() => alert('This is a button!')}>Info</Button>,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Đăng nhập',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        options={{
          title: 'Tạo tài khoản',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
