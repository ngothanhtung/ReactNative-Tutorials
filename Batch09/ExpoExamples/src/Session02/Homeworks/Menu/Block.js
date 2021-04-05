// Tham khảo: https://docs.expo.io/versions/latest/sdk/linear-gradient/

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 16,
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: W / 2 - 40,
    height: W / 2 - 30,
    backgroundColor: '#282B47',
    opacity: 0.97,

    borderRadius: 24,
  },

  textContainer: {
    paddingVertical: 12,
  },

  text: { fontWeight: '700' },
});

export default class Block extends Component {
  render() {
    return (
      <View style={styles.itemContainer}>
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.75]} colors={[this.props.color1, this.props.color2]} style={styles.iconContainer}>
          {this.props.icon}
        </LinearGradient>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: this.props.color2 }]}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}
