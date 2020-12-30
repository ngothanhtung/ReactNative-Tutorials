import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const bg = require('./assets/bg.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function Container({ children, style }) {
  return (
    <ImageBackground source={bg} style={[styles.container, style]} resizeMode="stretch">
      {children}
    </ImageBackground>
  );
}
