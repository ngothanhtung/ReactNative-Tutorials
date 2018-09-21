import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';

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

        <Button title="Get Users" onPress={() => {
          axios.get('https://slacklivechat.com/users/')
            .then(response => {
              console.log(response.data);
            }).catch(error => {
              console.log(error);
            })
        }} />
      </View>
    );
  }
}
