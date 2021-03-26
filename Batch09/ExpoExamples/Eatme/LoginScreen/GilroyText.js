import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  text: {
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#898B9A',
  },
});
export default class GilroyText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}
