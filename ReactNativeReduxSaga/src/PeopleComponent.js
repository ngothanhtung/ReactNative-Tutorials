import React, { Component } from 'react';
import { View, Text, } from 'react-native';

export default class PeopleComponent extends Component {
  componentDidMount() {
    console.log(this.props);
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
