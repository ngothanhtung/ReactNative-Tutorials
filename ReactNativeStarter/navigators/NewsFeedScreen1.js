import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class NewsFeedScreen1 extends Component {
  render() {
    return (
      <View>
        <Text> NewsFeedScreen1 </Text>
        <Button onPress={() => {
          this.props.navigation.navigate('NewsFeed2');
        }}
          title="Go to NewsFeedScreen2" />
      </View>
    );
  }
}
