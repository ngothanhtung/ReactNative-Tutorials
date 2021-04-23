import React from 'react';
import _ from 'lodash';
import auth from '@react-native-firebase/auth';

import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// GRAP SERVICE
import LoginStackNavigator from './LoginStackNavigator';
import UserTabNavigator from './UserTabNavigator';
import WorkerTabNavigator from './WorkerTabNavigator';

// FLASHCARD

import FLASHCARD_User_UserTabNavigator from './FLASHCARD/UserTabNavigator';

// SHOP
import SHOP_User_TabNavigator from './SHOP/UserTabNavigator';
// SLL
// import SLL_Parent_TabNavigator from './SLL/ParentTabNavigator';
import SLL_Parent_DrawerNavigator from './SLL/ParentDrawerNavigator';

import * as routes from '../routes';
import useOneSignal from '../hooks/useOneSignal';

import { autoSignInAction } from '../modules/auth/actions';
import Container from '../components/Container';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  const dispatch = useDispatch();
  const signedInUser = useSelector((state) => state.auth.signedInUser);
  const [initializing, setInitializing] = React.useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    if (initializing) {
      setInitializing(false);
    }

    if (user) {
      dispatch(autoSignInAction(user._user));
    }
  };

  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return unsubscribe; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="initializing" component={() => <Container ready={false} />} />
      </Stack.Navigator>
    );
  }

  if (!signedInUser) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.AUTH_SIGNIN_STACK_NAVIGATOR} component={LoginStackNavigator} />
      </Stack.Navigator>
    );
  }

  // ----------------------------------------------------------------------------------------------
  // SHOP
  // ----------------------------------------------------------------------------------------------
  if (signedInUser && signedInUser.profile.applicationName === 'SHOP' && signedInUser.profile.roles && _.indexOf(signedInUser.profile.roles, 'user') >= 0) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.USER_TAB_NAVIGATOR} component={SHOP_User_TabNavigator} />
      </Stack.Navigator>
    );
  }

  // ----------------------------------------------------------------------------------------------
  // SLL
  // ----------------------------------------------------------------------------------------------
  if (signedInUser && signedInUser.profile.applicationName === 'SLL' && signedInUser.profile.roles && _.indexOf(signedInUser.profile.roles, 'parent') >= 0) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SLL_Parent_DrawerNavigator" component={SLL_Parent_DrawerNavigator} />
        {/* <Stack.Screen name="SLL_Parent_TabNavigator" component={SLL_Parent_TabNavigator} /> */}
      </Stack.Navigator>
    );
  }
  // ----------------------------------------------------------------------------------------------
  // FLASHCARD
  // ----------------------------------------------------------------------------------------------
  if (
    signedInUser &&
    signedInUser.profile.applicationName === 'FLASHCARD' &&
    signedInUser.profile.roles &&
    _.indexOf(signedInUser.profile.roles, 'user') >= 0
  ) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FLASHCARD_User_TabNavigator" component={FLASHCARD_User_UserTabNavigator} />
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
  const { colors: themeColors } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={themeColors.primary} barStyle="light-content" />
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
