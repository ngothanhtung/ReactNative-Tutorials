import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

type Props = {};

const Dimension = (props: Props) => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

export default Dimension;

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 2,
    width: WIDTH,
    backgroundColor: 'yellow',
  },
});
