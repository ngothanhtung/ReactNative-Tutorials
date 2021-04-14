// SWITCH BUTTON
import React from 'react';
import { View } from 'react-native';
import Animated, { runOnUI, runOnJS, useAnimatedGestureHandler, useSharedValue, withSpring, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const WIDTH = 64;
const HEIGHT = 32;

export default function Example04({ onChange }) {
  const x = useSharedValue(0);
  const uasCircle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(x.value < 32 ? '#001972' : 'yellow'),
      borderColor: withTiming(x.value < 32 ? 'green' : 'gray'),
      transform: [{ translateX: withSpring(x.value) }],
    };
  });

  const uasContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(x.value < 32 ? 'green' : 'gray'),
    };
  });

  // Ref: https://docs.swmansion.com/react-native-reanimated/docs/worklets
  const workletFunction = (status) => {
    'worklet';
    runOnJS(onChange)(status);
  };

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      // pressed.value = true;
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      if (ctx.startX + event.translationX > 32) {
        x.value = WIDTH / 2;
      } else {
        x.value = 0;
      }
    },
    onEnd: (event, ctx) => {
      if (x.value < 32) {
        x.value = 0;
      } else {
        x.value = 32;
      }
      let status = x.value >= 32;

      // Call a worklet function
      // workletFunction(status);
      // or
      runOnJS(onChange)(status);
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[{ height: HEIGHT, width: WIDTH, backgroundColor: 'gray', borderRadius: 16 }, uasContainer]}>
          <Animated.View style={[{ borderColor: 'white', borderWidth: 2, height: HEIGHT, width: HEIGHT, borderRadius: HEIGHT / 2, backgroundColor: 'blue' }, uasCircle]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
