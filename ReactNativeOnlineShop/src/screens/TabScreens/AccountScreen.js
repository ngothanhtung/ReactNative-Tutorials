import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AccountScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <Text> AccountScreen </Text>
        <Button title="Go to ProductScreen" onPress={() => {
          this.props.navigation.navigate('ProductScreen');
        }} />
      </View>
    );
  }
}
