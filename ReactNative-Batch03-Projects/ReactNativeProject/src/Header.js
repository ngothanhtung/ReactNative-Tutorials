import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'red',
    padding: 12,
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
  }
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: '#e84393' }}>

        </View>
        <View style={{ flex: 1, backgroundColor: '#0984e3' }}>

        </View>
      </View>
    );
  }
}