import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigators/RootStackNavigator';
import { OneSignal } from 'react-native-onesignal';

type Props = {};

const AppNavigation = (props: Props) => {
  React.useEffect(() => {
    const setup = async () => {
      const token = await OneSignal.User.pushSubscription.getTokenAsync();
      const pushSubscriptionId = await OneSignal.User.pushSubscription.getIdAsync();

      console.log('OneSignal - Token:', token);
      console.log('OneSignal - PushSubscriptionId:', pushSubscriptionId);
    };

    setup();
  }, []);

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
