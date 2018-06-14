import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <Text> HomeScreen </Text>
        <Button title="Go to ProductScreen" onPress={() => {
          this.props.navigation.navigate('ProductScreen');
        }} />
      </View>
    );
  }
}
