import React from 'react';
import { OneSignal } from 'react-native-onesignal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStackNavigator from '../AuthStackNavigator';
import OnboardingStackNavigator from '../OnboardingStackNavigator';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  // Method for handling notifications received while app in foreground
  OneSignal.Notifications.addEventListener('foregroundWillDisplay', (notificationReceivedEvent) => {
    console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.getNotification().display();

    // CODE HERE
  });

  //Method for handling notifications opened
  OneSignal.Notifications.addEventListener('click', (notification: any) => {
    console.log('OneSignal: notification opened:', notification);
    // CODE HERE
  });

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='OnboardingStackNavigator' component={OnboardingStackNavigator} />
      <Stack.Screen name='AuthStackNavigator' component={AuthStackNavigator} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
