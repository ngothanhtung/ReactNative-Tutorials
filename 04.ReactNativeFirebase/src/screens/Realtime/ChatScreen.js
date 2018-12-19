import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import firebase from 'react-native-firebase';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };


  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> textInComponent </Text>
        <Button title="click me" onPress={() => {
          console.log('OK')
          const ref = firebase.database().ref('/');
          ref.set({ foo: 'bar' }).then(result => console.log(result)).catch(error => console.log(error));
        }} />
      </View>
    );
  }
}
