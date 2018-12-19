import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <Text> LoginScreen </Text>

        <Button title="Go to TabNavigator" onPress={() => {
          this.props.navigation.navigate('Tab');
        }} />
      </View>
    );
  }
}
