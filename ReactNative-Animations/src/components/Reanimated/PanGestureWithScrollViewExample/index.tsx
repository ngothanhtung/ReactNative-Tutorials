import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  useAnimatedGestureHandler,
  useDerivedValue,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';

import Page, { PAGE_WIDTH } from './components/Page';

const titles = ["What's", 'up', 'mobile', 'devs?'];

type ContextType = {
  x: number;
};

const MAX_TRANSLATE_X = -PAGE_WIDTH * (titles.length - 1);

function PanGestureWithScrollViewExample() {
  const translateX = useSharedValue(0);

  const clampedTranslateX = useDerivedValue(() => {
    return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
  });

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
    onStart: (_, context) => {
      context.x = clampedTranslateX.value;
      cancelAnimation(translateX);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x;
    },
    onEnd: event => {
      translateX.value = withDecay({ velocity: event.velocityX });
      console.log('event', event);
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={{ flex: 1, flexDirection: 'row' }}>
          {titles.map((title, index) => {
            return <Page key={index.toString()} translateX={clampedTranslateX} index={index} title={title} />;
          })}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureWithScrollViewExample />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
