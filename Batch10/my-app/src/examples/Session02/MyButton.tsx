import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  text: string;
  bgColor?: string;
  borderColor?: string;
};

// Default props
const MyButton = ({ text = 'Button', bgColor = 'white', borderColor = 'black' }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor, borderColor: borderColor }]}>
      <Text>{text}</Text>
    </View>
  );
};

export default MyButton;
const styles = StyleSheet.create({
  container: {
    height: 54,
    width: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'red',
    borderWidth: 2,
  },
});
