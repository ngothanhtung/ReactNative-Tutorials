import React, { Component } from 'react';
import { Platform, View, Text, } from 'react-native';

import styles from './styles';

import AndroidGenderPicker from './components/AndroidGenderPicker';
import AndroidPicker from './components/AndroidPicker';
import IOSGenderPicker from './components/IOSGenderPicker';

export default class RegisterScreenV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
    };
  }

  render() {
    const data = [
      { id: '', name: '[Select a job]' },
      { id: 'worker', name: 'Worker' },
      { id: 'student', name: 'Student' }
    ];

    const data2 = [
      { id: '', name: '[Select a city]' },
      { id: 'dn', name: 'Da Nang City' },
      { id: 'hn', name: 'Ha Noi City' },
      { id: 'hcm', name: 'Ho Chi Minh City' },
    ];

    return (
      <View style={styles.container}>
        {
          Platform.OS === 'ios' &&
          <IOSGenderPicker onSelect={(value) => { this.setState({ gender: value }) }} />
          ||
          <AndroidGenderPicker onSelect={(value) => { this.setState({ gender: value }) }} />
        }
        <AndroidPicker items={data} onSelect={(value) => { alert(value) }} />
        <AndroidPicker items={data2} onSelect={(value) => { alert(value) }} />
        <Text>
          Gender: {this.state.gender}
        </Text>
      </View>
    );
  }
}
