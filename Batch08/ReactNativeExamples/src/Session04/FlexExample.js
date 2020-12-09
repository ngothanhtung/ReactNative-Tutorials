/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import avatarImage from '../assets/images/avatar.jpeg';
// const avatarImage = require('../assets/images/avatar.jpeg');

const styles = StyleSheet.create({
  block1: {
    height: 60,
    width: 60,
    backgroundColor: '#8bc34a',
  },
  block2: {
    height: 60,
    width: 60,
    backgroundColor: '#9c27b0',
    alignSelf: 'flex-end',
  },
  block3: {
    height: 60,
    width: 60,
    backgroundColor: '#3f51b5',
    // alignItems: 'stretch',
  },
});

export default class FlexExample extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ffeb3b',
          alignItems: 'center',
        }}>
        <View style={styles.block1} />
        <View style={styles.block2} />
        <View style={styles.block3} />
        <View style={styles.block3} />
        <Image source={avatarImage} style={{ width: 400, height: 120 }} resizeMode="repeat" />
        {/* <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              'https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/119512811_10160347089269676_557847526290414018_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=D8zY675ItbEAX8cC6Mx&_nc_ht=scontent-xsp1-1.xx&oh=36be41b1c380ab72e8a4908bdb52aced&oe=5FD3CB49',
          }}
        /> */}
      </View>
    );
  }
}
