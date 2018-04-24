import React, { Component } from 'react';
import { Alert, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import Header from './Components/Header';

export default class ComponentExample extends Component {
  alert1 = () => {
    Alert.alert('Alert One');
  }

  alert2 = () => {
    Alert.alert('Alert Two');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header alertFunction={() => { this.alert2(); }} text="HELLO WORLD" />
        <Text> Component Examples </Text>
      </View>
    );
  }
}
