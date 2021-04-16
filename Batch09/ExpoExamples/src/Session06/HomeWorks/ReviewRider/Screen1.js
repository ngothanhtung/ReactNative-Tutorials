import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <Text> Screen 1 </Text>
        <Button
          title='Submit Review'
          onPress={() => {
            this.props.nextScreen();
          }}
        />
      </View>
    );
  }
}
