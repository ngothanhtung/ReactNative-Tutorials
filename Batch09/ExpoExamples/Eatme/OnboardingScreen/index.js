import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

import svg1 from './svg1';
// Notes:
// - expo install react-native-svg

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SvgXml xml={svg1} />
      </View>
    );
  }
}
