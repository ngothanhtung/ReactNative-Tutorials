import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

type Props = {};

const ScrollViewExample = (props: Props) => {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
      <View style={styles.block}></View>
    </ScrollView>
  );
};

export default ScrollViewExample;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    height: 240,
  },

  block: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    marginBottom: 24,
    marginRight: 24,
  },
});
