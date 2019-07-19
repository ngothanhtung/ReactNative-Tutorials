import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Login from '../../modules/Auth/components/Login';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
    );
  }
}
