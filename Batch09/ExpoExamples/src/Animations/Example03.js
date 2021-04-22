import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import Animated, { useAnimatedGestureHandler, useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';
import { TapGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';

export default function Example03() {
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const pressed = useSharedValue(false);

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      // transform: [{ translateX: x.value }, { translateY: y.value }],
      transform: [{ translateX: x.value }],
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      // ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      // y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      console.log('ctx', ctx.startX, ctx.startY);
      // x.value = withSpring(startingPosition);
      // y.value = withSpring(startingPosition);
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 32, width: 72, backgroundColor: 'gray', borderRadius: 16 }}>
        <PanGestureHandler onGestureEvent={eventHandler}>
          <Animated.View style={[{ height: 32, width: 32, borderRadius: 16, backgroundColor: 'blue' }, uas]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}
