import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

// FIREBASE
import firebase from 'react-native-firebase';
// Docs: https://firebase.google.com/docs/firestore/quickstart
export default class ReadDataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection('users')
      // where
      .get()
      .then((snapshot) => {
        var users = [];
        snapshot.forEach((doc) => {
          const user = doc.data();
          users.push(user);
        });
        this.setState({ users: [...users] });
        console.log(this.state.users);
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });

    // REAL TIME
    let observer = db
      .collection('users')
      // .where('state', '==', 'CA')
      .onSnapshot((querySnapshot) => {
        // console.log(querySnapshot);
        querySnapshot.docChanges.forEach((change) => {
          if (change.type === 'added') {
            console.log('New user: ', change.doc.data());
          }
          if (change.type === 'modified') {
            console.log('Modified user: ', change.doc.data());
          }
          if (change.type === 'removed') {
            console.log('Removed user: ', change.doc.data());
          }
        });
      });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.users && (
          <FlatList
            data={this.state.users}
            keyExtractor={(item, index) => 'user-' + index}
            renderItem={({ item, index }) => (
              <View>
                <Text>{item.email}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 1 / 2, backgroundColor: 'black' }} />}
          />
        )}
      </View>
    );
  }
}
