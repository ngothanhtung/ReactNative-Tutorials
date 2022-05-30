import React from 'react';
import { Button } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function ReMovement() {
  const randomWidth = useSharedValue(0);
  const randomFontSize = useSharedValue(15);

  const boxContainerStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, {
        duration: 1000,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(randomFontSize.value, {
        duration: 1000,
      }),
    };
  });

  return (
    <React.Fragment>
      <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'black', margin: 30 }, boxContainerStyle]}></Animated.View>
      <Button
        title='toogle'
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          randomFontSize.value = 32;
        }}
      />
      <Animated.Text style={[textStyle]}>Hello</Animated.Text>
    </React.Fragment>
  );
}
