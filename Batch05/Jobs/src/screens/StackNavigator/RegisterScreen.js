import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Register from '../../modules/Auth/components/Register';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Register />
      </SafeAreaView>
    );
  }
}
