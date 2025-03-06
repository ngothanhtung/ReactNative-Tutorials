import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Fonts from '../constants/fonts';

type Props = {
  text: string;
};

const SubHeader = ({ text = 'No Text' }: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default SubHeader;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Fonts.GilroyMedium,
    color: '#525C67',
  },
});
