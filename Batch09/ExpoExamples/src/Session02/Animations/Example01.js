import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Animated, { Easing } from 'react-native-reanimated';

const { Value, timing } = Animated;

export default class Example01 extends React.Component {
  constructor(props) {
    super(props);

    this._transX = new Value(0);

    this._anim = timing(this._transX, {
      duration: 1000,
      toValue: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }

  componentDidMount() {
    this._anim.start();
  }

  render() {
    console.log(this._transX);
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ translateX: this._transX }] }]} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 5,
  },
});
