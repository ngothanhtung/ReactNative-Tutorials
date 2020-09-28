import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginStackNavigator from './LoginStackNavigator';
import UserTabNavigator from './UserTabNavigator';
import WorkerTabNavigator from './WorkerTabNavigator';

import * as routes from '../routes';
import useOneSignal from '../hooks/useOneSignal';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  const signedInInUser = useSelector((state) => state.auth.signedInInUser);

  if (!signedInInUser) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.AUTH_SIGNIN_STACK_NAVIGATOR}
          component={LoginStackNavigator}
        />
      </Stack.Navigator>
    );
  }

  return signedInInUser.profile.roles === 'Users' ? (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.USER_TAB_NAVIGATOR}
        component={UserTabNavigator}
      />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.WORKER_TAB_NAVIGATOR}
        component={WorkerTabNavigator}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  useOneSignal();

  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
