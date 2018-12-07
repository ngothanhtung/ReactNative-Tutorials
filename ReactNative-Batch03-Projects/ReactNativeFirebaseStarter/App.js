import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import ChatScreen from './ChatScreen';
import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // GET TOKEN
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('fcmToken', fcmToken);
          alert(fcmToken);
        } else {
          // user doesn't have a device token yet
          console.log("user doesn't have a device token yet");
        }
      });

    // CHECK PERMISSION
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      console.log('Permission OK');
    } else {
      // user doesn't have permission
      console.log('Permission Not OK');
      // Request permissions
      try {
        await firebase.messaging().requestPermission();
        // User has authorised
      } catch (error) {
        // User has rejected permissions
      }
    }
    // DATA-ONLY
    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required
      console.log(message);
    });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('notificationDisplayedListener', notification);
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      console.log('notificationListener', notification);
    });

    // App in Foreground and background
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;

      console.log('notificationOpenedListener - action', action);
      console.log('notificationOpenedListener - notification', notification);
    });

    // App Closed
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      // App was opened by a notification
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;

      console.log('(App Closed) notificationOpen - action', action);
      console.log('(App Closed) notificationOpen - notification', notification);
    }
  }

  componentWillUnmount() {
    this.messageListener();

    this.notificationDisplayedListener();
    this.notificationListener();

    this.notificationOpenedListener();
  }

  render() {
    return (
      <ScrollView>
        <ChatScreen />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
