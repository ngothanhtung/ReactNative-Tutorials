import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class TabItemScreen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
        <Text>This is tab item 2</Text>
      </View>
    );
  }
}
