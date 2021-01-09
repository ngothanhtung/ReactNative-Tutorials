import React from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function CloudMessageExample() {
  React.useEffect(() => {
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log(remoteMessage);
      });

    // GET FCM Token
    messaging()
      .getToken()
      .then((token) => {
        console.log(token);
      });

    // CHECK PERMISSION
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          // user has permissions
          console.log('hasPermission', enabled);
        } else {
          // user doesn't have permission
          // REQUEST PERMISSION

          messaging()
            .requestPermission()
            .then(() => {
              // User has authorised
            })
            .catch((error) => {
              // User has rejected permissions
              console.log('requestPermission', error);
            });
        }
      });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', remoteMessage);
    });

    // APP FOREGROUND / BACKGROUND
    messaging().onNotificationOpenedApp((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log('onNotificationOpened - action', action);
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log('onNotificationOpened - notification', notification);
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text>FCM message</Text>
    </View>
  );
}
