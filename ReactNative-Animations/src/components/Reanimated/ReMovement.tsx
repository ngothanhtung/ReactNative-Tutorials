import React from 'react';
import { Button, SafeAreaView, Animated as A } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export default function ReMovement() {
  const animatedSize = React.useRef(new A.Value(0)).current;

  const animatedWidth = useSharedValue(0);
  const animatedHeight = useSharedValue(0);

  const randomWidth = useSharedValue(0);
  const randomFontSize = useSharedValue(15);

  const circleStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animatedWidth.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
      height: withTiming(animatedHeight.value, {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
      }),
    };
  });

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
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      {/* <View style={[{ height: 100, width: 100, backgroundColor: 'red' }]} /> */}
      <Animated.View style={[{ borderRadius: 12, height: 0, width: 0, backgroundColor: 'red' }, circleStyle]} />
      <A.View style={[{ borderRadius: 12, height: animatedSize, width: animatedSize, backgroundColor: 'green' }]} />
      <Animated.View
        style={[{ height: 100, width: 100, backgroundColor: 'black', margin: 30 }, boxContainerStyle]}></Animated.View>
      <Button
        title="toogle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          randomFontSize.value = 32;

          animatedWidth.value = animatedWidth.value === 24 ? 0 : 24;
          animatedHeight.value = animatedHeight.value === 24 ? 0 : 24;

          A.timing(animatedSize, {
            toValue: 24,
            duration: 500,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Animated.Text style={[textStyle]}>Hello</Animated.Text>
    </SafeAreaView>
  );
}
