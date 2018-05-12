import React, { Component } from 'react';
import {
  View, Text, Button
} from 'react-native';

export default class MoreScreen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>More Screen 2</Text>
        <Button title="Go to More Screen 1" onPress={() => { this.props.navigation.navigate('MoreScreen1') }} />
        <Button title="Go to Tab Item Screen 2" onPress={() => { this.props.navigation.navigate('TabItem2') }} />
      </View>
    );
  }
}
