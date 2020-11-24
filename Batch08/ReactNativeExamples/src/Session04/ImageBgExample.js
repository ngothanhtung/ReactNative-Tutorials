/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import BgImage from '../assets/images/orange-background.jpg';

export default class ImageBgExample extends Component {
  render() {
    return (
      <ImageBackground
        style={{ flex: 1, position: 'relative' }}
        blurRadius={20}
        source={BgImage}>
        <Text> textInComponent </Text>
      </ImageBackground>
    );
  }
}
