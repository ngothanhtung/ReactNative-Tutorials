import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type Props = {};

const Icon = (props: Props) => {
  return <View style={styles.container}></View>;
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 16,
    backgroundColor: 'green',
    borderRadius: 8,
  },
});
