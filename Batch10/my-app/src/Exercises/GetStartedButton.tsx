import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
};

const GetStartedButton = ({
  leftIcon,
  rightIcon,
  title = 'Get started',

  backgroundColor = '#000000',
  color = '#ffffff',
  borderColor = '#000000',
}: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor, borderColor: borderColor }]}>
      {leftIcon && <View style={{ marginRight: 24 }}>{leftIcon}</View>}

      <Text style={[styles.text, { color: color }]}>{title}</Text>
      <View style={{ flex: 1 }}></View>
      {rightIcon}
    </View>
  );
};

export default GetStartedButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#000000',
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
});
