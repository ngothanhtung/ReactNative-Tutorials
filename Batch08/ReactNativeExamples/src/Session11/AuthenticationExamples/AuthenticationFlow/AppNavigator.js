/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import auth from '@react-native-firebase/auth';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

// Navigators
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthenticationStackNavigator = () => {
  const [signedInUser, setSignedInUser] = React.useState(null);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    if (user) {
      setSignedInUser(user);
    } else {
      setSignedInUser(null);
    }
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Not signed in
  if (!signedInUser) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackNavigator" component={StackNavigator} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthenticationStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
