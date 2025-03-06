import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Fonts from '../constants/fonts';

type Props = {
  text: string;
};

const Header = ({ text = 'No Text' }: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: Fonts.GilroyBold,
  },
});
