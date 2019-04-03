import React from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';

import { Provider } from 'react-redux';

import { sagaMiddleware } from './src/modules/middlewares';
import rootSagas from './src/modules/rootSagas';
import store from './src/modules/store';
// import Login from './modules/authModule/components/Login'
import AppNavigator from './src/screens/SwitchNavigator';
// NavigationService:
// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import NavigationService from './src/helpers/NavigationService';
// SAGA
sagaMiddleware.run(rootSagas);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // GET TOKEN
    firebase
      .messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('Token: ', fcmToken);
        } else {
          // user doesn't have a device token yet
        }
      });

    // CHECK PERMISSION
    firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
          console.log('hasPermission', enabled);
        } else {
          // user doesn't have permission
          // REQUEST PERMISSION
          firebase
            .messaging()
            .requestPermission()
            .then(() => {
              // User has authorised
            })
            .catch(error => {
              // User has rejected permissions
              console.log('requestPermission', error);
            });
        }
      });

    // DEFAULT CHANNEL
    const channel = new firebase.notifications.Android.Channel('default', 'Default Channel', firebase.notifications.Android.Importance.Max);
    channel.setDescription('My default channel');
    // Create the channel
    firebase.notifications().android.createChannel(channel);

    // data-only messages from FCM
    // https://rnfirebase.io/docs/v4.2.x/messaging/receiving-messages
    this.messageListener = firebase.messaging().onMessage(message => {
      // Process your message as required
      console.log('onMessage', message);
    });

    // LOCAL NOTIFICATION: FOREGROUND
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed(notification => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('onNotificationDisplayed', notification);
    });

    this.notificationListener = firebase.notifications().onNotification(notification => {
      // Process your notification as required
      console.log('onNotification', notification);
      notification.android.setChannelId('default');
      firebase.notifications().displayNotification(notification);
    });

    // APP FOREGROUND / BACKGROUND
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened(notificationOpen => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log('onNotificationOpened - action', action);
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log('onNotificationOpened - notification', notification);
    });

    // APP CLOSED
    firebase
      .notifications()
      .getInitialNotification()
      .then(notificationOpen => {
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
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
