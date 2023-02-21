import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { Page } from './components/Pages';

const WIDTH = Dimensions.get('window').width;

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

export default () => {
  const translateX = useSharedValue(0);
  const currentPage = useSharedValue(1);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      color: 'red',
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        pagingEnabled={true}
        scrollEventThrottle={50}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScrollEndDrag={e => {
          let pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / WIDTH + 0.5) + 1, 0), WORDS.length);
          currentPage.value = pageNumber;
        }}>
        {WORDS.map((title, index) => {
          return <Page key={index.toString()} title={title} translateX={translateX} index={index} />;
        })}
      </Animated.ScrollView>
      <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {WORDS.map((item, index) => {
          let style = currentPage.value === index + 1 ? rStyle : {};
          return <Animated.View key={index} style={[styles.indicator, style]}></Animated.View>;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicator: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: 'red',
  },
});
