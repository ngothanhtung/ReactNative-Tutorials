import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AccountScreen extends Component {
  static navigationOptions = {
    title: 'Account',
    tabBarIcon: <Icon name='account' size={24} />
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Account </Text>

      </View>
    );
  }
}
