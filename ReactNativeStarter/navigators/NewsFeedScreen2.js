import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class NewsFeedScreen2 extends Component {
  render() {
    return (
      <View>
        <Text> NewsFeedScreen2 </Text>
        <Button onPress={() => {
          this.props.navigation.navigate('NewsFeed1');
        }}
          title="Go to NewsFeedScreen1" />
      </View>
    );
  }
}
