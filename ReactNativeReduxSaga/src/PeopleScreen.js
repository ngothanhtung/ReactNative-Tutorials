import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class PeopleScreen extends Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> PEOPLE </Text>
      </View>
    );
  }
}
