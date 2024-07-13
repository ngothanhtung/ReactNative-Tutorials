import { StyleSheet, ScrollView, View } from 'react-native';
import React from 'react';

type Props = {};

const ScrollViewInScrollView = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxLarge} />
      <ScrollView pagingEnabled={false} style={{ height: 100 }}>
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
        <View style={styles.boxSmall} />
      </ScrollView>
      <View style={styles.boxLarge} />
      <View style={styles.boxSmall} />
      <View style={styles.boxLarge} />
    </ScrollView>
  );
};

export default ScrollViewInScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});
