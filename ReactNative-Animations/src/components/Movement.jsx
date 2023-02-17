import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function Movement() {
  const animatedLeft = React.useRef(new Animated.Value(10)).current;

  React.useEffect(() => {
    Animated.timing(animatedLeft, {
      toValue: 200,
      duration: 1000,
      delay: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedLeft]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: 100,
          width: 100,
          marginTop: 100,
          marginLeft: animatedLeft,
          backgroundColor: 'violet',
        }}
      ></Animated.View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
