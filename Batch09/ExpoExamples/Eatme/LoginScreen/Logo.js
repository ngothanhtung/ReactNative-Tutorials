import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image style={{ width: 286, height: 90 }} source={require('../../assets/logo-eatme.png')} />
      </View>
    );
  }
}
