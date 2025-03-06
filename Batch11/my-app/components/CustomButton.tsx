import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import Fonts from '../constants/fonts';

type Props = {
  textColor?: string;
  color?: string;
  text?: string;
  onPress?: () => void; // Thuộc tính có kiểu function không bắt buộc truyền vào
  icon?: any; // Thuộc tính có kiểu bất kỳ không bắt buộc truyền vào
};

const CustomButton = ({ text = 'No Text', onPress, color = '#FF6C44', textColor = '#FFFFFF', icon = null }: Props) => {
  return (
    <Pressable style={[styles.container, { backgroundColor: color }]} onPress={onPress}>
      {icon}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: '100%',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    fontFamily: Fonts.GilroySemiBold,
  },
});
