import React from 'react';
import { StyleSheet, Platform, TextInput, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
  }

  async componentDidMount() {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          alert(fcmToken);
          this.setState({ token: fcmToken });
        } else {
          // user doesn't have a device token yet
        }
      });

    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
          alert('OK')
        } else {
          // user doesn't have permission
          firebase.messaging().requestPermission()
            .then(() => {
              // User has authorised  
            })
            .catch(error => {
              // User has rejected permissions  
            });
        }
      });

    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required      
      console.log('onMessage', message)
      alert(message.data.title);
    });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.

    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Text>Hello Firebase</Text>
          <TextInput value={this.state.token} />
        </View>
      </ScrollView>
    );
  }
}

