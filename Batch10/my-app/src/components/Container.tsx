import React from 'react';
import { ImageBackground, StyleProp, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: Props) => {
  return (
    <ImageBackground source={require('./assets/bg.png')} style={[styles.container, style]}>
      {children}
    </ImageBackground>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
