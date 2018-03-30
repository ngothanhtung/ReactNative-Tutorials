import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='Go to about' onPress={() => { this.props.navigation.navigate('About', {id: 1}) }} />
      </View>
    );
  }
}

