import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import Animated, { useAnimatedGestureHandler, useSharedValue, withSpring, useAnimatedStyle, withTiming, withDecay } from 'react-native-reanimated';
import { TapGestureHandler, PanGestureHandler } from 'react-native-gesture-handler';

export default function Example04() {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);

  // const pressed = useSharedValue(false);

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(x.value < 32 ? '#001972' : 'yellow'),
      borderColor: x.value < 32 ? 'green' : 'gray',
      transform: [{ translateX: withSpring(x.value) }],
    };
  });

  const uas2 = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(x.value < 32 ? 'green' : 'gray'),
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      // pressed.value = true;
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      if (ctx.startX + event.translationX > 32) {
        x.value = 32;
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
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[{ height: 32, width: 64, backgroundColor: 'gray', borderRadius: 16 }, uas2]}>
          <Animated.View style={[{ borderColor: 'white', borderWidth: 3, height: 32, width: 32, borderRadius: 16, backgroundColor: 'blue' }, uas]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
