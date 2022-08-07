import { View, Text, Platform } from 'react-native';
import React from 'react';

// OneSignal
import OneSignal from 'react-native-onesignal';
import Constants from 'expo-constants';
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export default function Session12() {
  // promptForPushNotifications will show the native Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 7)
  if (Platform.OS === 'android') {
    OneSignal.promptForPushNotifications();
  }

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
    console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler((notification) => {
    console.log('OneSignal: notification opened:', notification);
  });

  return (
    <View>
      <Text>Session12</Text>
    </View>
  );
}
