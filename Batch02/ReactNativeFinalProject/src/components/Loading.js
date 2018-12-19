import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';
export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.purpleColor} />
      </View>
    );
  }
}
