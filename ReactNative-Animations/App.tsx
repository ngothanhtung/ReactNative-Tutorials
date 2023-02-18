import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Movement from './src/components/Movement';
import ReMovement from './src/components/Reanimated/ReMovement';
import PanGestureExample from './src/components/Reanimated/PanGestureBasicExample';
import InterpolateScrollViewExample from './src/components/Reanimated/InterpolateScrollViewExample';
import InterpolateThemeColorExample from './src/components/Reanimated/InterpolateThemeColorExample';
import PanGestureWithScrollViewExample from './src/components/Reanimated/PanGestureWithScrollViewExample';
import ColorPickerExample from './src/components/Reanimated/ColorPickerExample';
import SwipeToDeleteExample from './src/components/Reanimated/SwipeToDeleteExample';
import RippleEffectExample from './src/components/Reanimated/RippleEffectExample';
import AnimatedFlatListExample from './src/components/Reanimated/AnimatedFlatListExample';
import PerspectiveMenuExample from './src/components/Reanimated/PerspectiveMenuExample';
import BottomSheetExample from './src/components/Reanimated/BottomSheetExample';

//

import WalkthroughtExample from './src/components/Reanimated/WalkthroughtExample';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Movement /> */}
      {/* <ReMovement /> */}
      {/* <PanGestureExample /> */}
      {/* <InterpolateScrollViewExample /> */}
      {/* <InterpolateColorPickerExample /> */}
      {/* <ColorPickerExample /> */}
      {/* <SwipeToDeleteExample /> */}
      {/* <RippleEffectExample /> */}
      {/* <AnimatedFlatListExample /> */}
      {/* <PerspectiveMenuExample /> */}
      {/* <BottomSheetExample /> */}

      {/* <PanGestureWithScrollViewExample /> */}
      <WalkthroughtExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
