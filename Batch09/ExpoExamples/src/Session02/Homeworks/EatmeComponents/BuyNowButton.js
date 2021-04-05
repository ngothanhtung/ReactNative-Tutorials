import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class BuyNowButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttonText}> Buy Now </Text>
        <Text style={styles.buttonText}> ${this.props.total} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
