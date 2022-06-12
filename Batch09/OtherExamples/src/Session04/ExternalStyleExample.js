import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class ExternalStyleExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
