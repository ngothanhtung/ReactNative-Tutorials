import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Categories from './Categories';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Categories />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
