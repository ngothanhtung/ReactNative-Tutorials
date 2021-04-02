import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AntDesign as ADIcon } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 24,
  },
  text: {
    marginLeft: 4,
    fontSize: 18,
  },
});

export default class LikeButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ADIcon name='like1' style={styles.icon} />
        <Text style={styles.text}>Like</Text>
      </View>
    );
  }
}
