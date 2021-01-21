import React from 'react';
import auth from '@react-native-firebase/auth';

import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStackNavigator from './LoginStackNavigator';
import UserTabNavigator from './UserTabNavigator';
import WorkerTabNavigator from './WorkerTabNavigator';

import * as routes from '../routes';
import useOneSignal from '../hooks/useOneSignal';

import { autoSignInAction } from '../modules/auth/actions';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  const dispatch = useDispatch();
  const signedInUser = useSelector((state) => state.auth.signedInUser);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch(autoSignInAction(user._user));
    }
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!signedInUser) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.AUTH_SIGNIN_STACK_NAVIGATOR} component={LoginStackNavigator} />
      </Stack.Navigator>
    );
  }

  return signedInUser.profile.roles === 'Users' ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.USER_TAB_NAVIGATOR} component={UserTabNavigator} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.WORKER_TAB_NAVIGATOR} component={WorkerTabNavigator} />
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
