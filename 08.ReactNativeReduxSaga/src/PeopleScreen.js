import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import PeopleContainer from './PeopleContainer';

export default class PeopleScreen extends Component {
  render() {
    return (
      <View>
        <PeopleContainer />
      </View>
    );
  }
}
