import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import styles from './styles';

export default class CreateAccountScreen extends Component {
  static navigationOptions = {
    title: 'Create Account'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Create account</Text>
      </View>
    );
  }
}
