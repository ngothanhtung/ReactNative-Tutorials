import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Animated, { EasingNode } from 'react-native-reanimated';

const { Value, timing } = Animated;

export default class Example01 extends React.Component {
  constructor(props) {
    super(props);

    this._transX = new Value(0);

    this._color = new Value(0);

    this._colorAnim = timing(this._color, {
      duration: 2000,
      toValue: 150,
      easing: EasingNode.inOut(EasingNode.ease),
    });

    this._anim = timing(this._transX, {
      duration: 1000,
      toValue: 300,
      easing: EasingNode.inOut(EasingNode.ease),
    });
  }

  componentDidMount() {
    this._anim.start();
    this._colorAnim.start();
  }

  render() {
    const interpolateColor = Animated.interpolateColors(this._color, {
      inputRange: [0, 150],
      outputColorRange: ['red', 'green'],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ translateX: this._transX }] }]} />

        <Animated.View
          style={{
            height: 300,
            width: 300,
            backgroundColor: interpolateColor,
          }}
        ></Animated.View>
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
