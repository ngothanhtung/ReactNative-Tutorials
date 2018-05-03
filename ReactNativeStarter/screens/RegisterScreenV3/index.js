import React, { Component } from 'react';
import { Platform, View, Text, } from 'react-native';

import styles from './styles';

import AndroidGenderPicker from './components/AndroidGenderPicker';
import IOSGenderPicker from './components/IOSGenderPicker';

export default class RegisterScreenV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          Platform.OS === 'ios' &&
          <IOSGenderPicker onSelect={(value) => { this.setState({ gender: value }) }} />
          ||
          <AndroidGenderPicker onSelect={(value) => { this.setState({ gender: value }) }} />
        }
        <Text>
          Gender: {this.state.gender}
        </Text>
      </View>
    );
  }
}
