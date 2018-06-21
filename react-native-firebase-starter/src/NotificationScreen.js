import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import firebase from 'react-native-firebase';

export default class NotificationScreen extends Component {
  componentDidMount() {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('Token: ', fcmToken);
        } else {
          // user doesn't have a device token yet
        }
      });

    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
          console.log('hasPermission', enabled)
        } else {
          // user doesn't have permission
          firebase.messaging().requestPermission()
            .then(() => {
              // User has authorised  
            })
            .catch(error => {
              // User has rejected permissions  
              console.log('requestPermission', error)
            });
        }
      });

    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required
      console.log('onMessage', message);
    });


    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('onNotificationDisplayed', notification);
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      console.log('onNotification', notification);
    });


    // APP FOREGROUND / BACKGROUND
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log('onNotificationOpened - action', action);
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log('onNotificationOpened - notification', notification)
    });


    // APP CLOSED
    firebase.notifications().getInitialNotification()
      .then((notificationOpen) => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          console.log('getInitialNotification - action', action);
          // Get information about the notification that was opened
          const notification = notificationOpen.notification;
          console.log('getInitialNotification - notification', notification);
        }
      });

  }

  componentWillUnmount() {
    this.messageListener();

    this.notificationDisplayedListener();
    this.notificationListener();
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
