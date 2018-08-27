import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Copyright extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: this.props.color }}> {this.props.name} </Text>
      </View>
    );
  }
}
