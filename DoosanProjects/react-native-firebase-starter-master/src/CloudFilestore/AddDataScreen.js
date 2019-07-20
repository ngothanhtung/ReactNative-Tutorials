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
            var data = { username: 'tuannq', email: 'tuannq@softech.vn', phone: '090557803' };
            let setDoc = db
              .collection('users')
              .doc('T001')
              .set(data);
          }}
        />
        <View style={{ height: 12 }} />
        <Button
          title='Add data (auto id)'
          onPress={() => {
            const db = firebase.firestore();
            var data = { username: 'tungnt', email: 'tungnt@softech.vn', phone: '0905`57803' };

            let addDoc = db
              .collection('users')
              .add(data)
              .then((value) => {
                console.log(value);
              });

            console.log(addDoc);
          }}
        />
        <View style={{ height: 12 }} />
      </View>
    );
  }
}
