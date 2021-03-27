import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},

  text: {
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#898B9A',
  },
});

export default class GilroyText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, this.props.style]}>{this.props.children}</Text>
      </View>
    );
  }
}
