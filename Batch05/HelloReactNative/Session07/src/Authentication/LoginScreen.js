import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.unsubscriber = null;
    this.state = {
      user: null,
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return (
      <View>
        {this.state.user && <Text>Welcome: {this.state.user.displayName}</Text>}
        <Button
          title='Create user'
          onPress={() => {
            firebase
              .auth()
              .createUserWithEmailAndPassword('khanhnn@softech.vn', '123456789')
              .then((result) => {
                console.log(result);
              });
          }}
        />

        <Button
          title='Login'
          onPress={() => {
            firebase
              .auth()
              .signInWithEmailAndPassword('tungnt@softech.vn', '1234567890')
              .then((result) => {
                console.log('LOGIN: ', result);
              });
          }}
        />

        <Button
          title='Sign out'
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(() => {
                console.log('Sign out OK');
              });
          }}
        />

        <Button
          title='Update display name'
          onPress={() => {
            firebase.auth().currentUser.updateProfile({
              displayName: 'Ngo Thanh Tung',
              // photoURL: 'https://i.pravatar.cc/150?img=2',
              // phoneNumber: '0905157803',
            });
          }}
        />

        <Button
          title='Login with phone number'
          onPress={() => {
            firebase
              .auth()
              .signInWithPhoneNumber('+84905157803')
              .then((confirmResult) => {
                // Send verification Code OK
                console.log(confirmResult);
                this.setState({ confirmResult: confirmResult });
              });
          }}
        />

        <TextInput
          style={{ height: 44, backgroundColor: 'yellow', paddingHorizontal: 8, borderRadius: 8 }}
          onChangeText={(text) => {
            this.setState({ verificationCode: text });
          }}
        />
        <Button
          title='Verify'
          onPress={() => {
            this.state.confirmResult.confirm(this.state.verificationCode).then((result) => {
              // Login ok
              console.log(result);
            });
          }}
        />
      </View>
    );
  }
}
