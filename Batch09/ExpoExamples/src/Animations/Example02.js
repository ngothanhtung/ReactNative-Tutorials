import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import Animated, { withSpring, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const views = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const H = Dimensions.get('window').height;

export default function Example02() {
  const scrollOffset = useSharedValue(0);
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(
            offset.value * 255,
            {
              duration: 500,
              easing: Easing.out(Easing.exp),
            },
            (finished) => {
              if (finished) {
                console.log('ANIMATION ENDED');
              } else {
                console.log('ANIMATION GOT CANCELLED');
              }
            },
          ),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.y;
      // console.log('Height', H);
      // console.log('OffsetY', scrollOffset.value);
    },
  });

  return (
    <Animated.ScrollView onScroll={scrollHandler}>
      <Animated.View style={[{ height: 100, width: 100, backgroundColor: 'black' }, animatedStyles]} />
      <Button onPress={() => (offset.value = Math.random())} title='Move' />

      <View style={{ height: 200, flex: 1, backgroundColor: 'green' }}></View>
      <View style={{ height: 200, flex: 1, backgroundColor: 'yellow' }}></View>
      <View style={{ height: 200, flex: 1, backgroundColor: 'orange' }}></View>
      <View style={{ height: 200, flex: 1, backgroundColor: 'red' }}></View>
      <View style={{ height: 200, flex: 1, backgroundColor: 'pink' }}></View>
      <View style={{ height: 200, flex: 1, backgroundColor: 'violet' }}></View>
    </Animated.ScrollView>
  );
}
