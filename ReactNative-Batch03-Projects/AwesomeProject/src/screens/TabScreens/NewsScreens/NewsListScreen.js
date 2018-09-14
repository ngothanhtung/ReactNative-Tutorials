import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NewsListScreen extends Component {
  static navigationOptions = {
    title: 'News List',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'brown', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Login </Text>
        <Button title="Go to News Details" onPress={() => {
          this.props.navigation.navigate('NewsDetailsScreen', {});
        }} />
      </View>
    );
  }
}
