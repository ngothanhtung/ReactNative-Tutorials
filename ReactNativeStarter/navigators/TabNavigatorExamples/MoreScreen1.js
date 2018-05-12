import React, { Component } from 'react';
import {
  View, Text, Button
} from 'react-native';

export default class MoreScreen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>More Screen 1</Text>
        <Button title="Go to More Screen 2" onPress={() => { this.props.navigation.navigate('MoreScreen2') }} />
      </View>
    );
  }
}
