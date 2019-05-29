import React, { Component } from 'react';
import { View, Button } from 'react-native';
// FIREBASE
import firebase from 'react-native-firebase';
// Docs: https://firebase.google.com/docs/firestore/quickstart

export default class AddDataScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title='Add data'
          onPress={() => {
            const db = firebase.firestore();
            var docRef = db.collection('users').doc('mod');
          }}
        />
        <View style={{ height: 12 }} />
        <Button
          title='Add data (auto id)'
          onPress={() => {
            const db = firebase.firestore();
            var data = { username: 'tungnt', email: 'tungnt@softech.vn', phone: '0905`57803' };
          }}
        />
        <View style={{ height: 12 }} />
      </View>
    );
  }
}
