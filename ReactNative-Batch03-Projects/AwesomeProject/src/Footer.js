import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 6,
  },
  footerText: {
    color: 'white'
  }
});

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.footerText}>Copyright by Aptech</Text>
      </View>
    );
  }
}