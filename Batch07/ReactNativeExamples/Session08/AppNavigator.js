import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Đăng nhập', headerShown: false}}
        />
        <Stack.Screen
          initialParams={{message: 'Init text'}}
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Đăng ký',
            headerBackTitle: 'Quay lại',
            headerBackTitleVisible: false,
          }}
        />

        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
