import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

// Import from file logo
import logo from '../assets/images/logo.png';

type Props = {};

const Logo = (props: Props) => {
  return (
    <View>
      <Image style={styles.image} source={logo} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 190,
  },
});
