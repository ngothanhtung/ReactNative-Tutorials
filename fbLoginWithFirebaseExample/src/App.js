import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { handleFbLogin } from './lib/auth';
import firebase from './config/firebase';
const db = firebase.firestore();
export default class App extends Component<{}> {
  constructor() {
    super();

    var data = {
      'name': 'Code firebase',
      'status': 'doing'
    };

    var docRef = db.collection('Tasks').add(data).then(result => {
      console.log(result);
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.loginButton}
          onPress={handleFbLogin}
          title="Sign in with facebook"

        />
      </View>
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
  loginButton: {
    color: "#3c50e8"
  }
});