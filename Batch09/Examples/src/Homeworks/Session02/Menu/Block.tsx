// Tham khảo: https://docs.expo.io/versions/latest/sdk/linear-gradient/

import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 16,
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: W / 2 - 40,
    height: W / 2 - 30,
    backgroundColor: '#282B47',
    opacity: 0.95,

    borderRadius: 24,
  },

  textContainer: {
    paddingVertical: 12,
  },

  text: { fontWeight: '700' },
});

type Props = {
  text: string;
  icon: any;
  color1: string;
  color2: string;
};

const Block = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 0.75]} colors={[props.color1, props.color2]} style={styles.iconContainer}>
        {props.icon}
      </LinearGradient>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: props.color2 }]}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Block;
