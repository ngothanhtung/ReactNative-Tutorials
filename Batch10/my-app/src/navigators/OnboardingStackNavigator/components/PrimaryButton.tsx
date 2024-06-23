/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import COLORS from '@/constants/COLORS';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const height = 48;

type Props = {
  text: string;
  style?: any;
  icon?: any;
  onPress?: () => void;
};

export default function PrimaryButton({ text, style, icon = <Icon name='email' color='white' size={16} style={{ marginRight: 8 }} />, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.primary,
          borderRadius: height / 2,
        },
        style,
      ]}
      onPress={() => {
        onPress && onPress();
      }}
    >
      {icon}
      <Text style={{ color: 'white' }}>{text}</Text>
    </TouchableOpacity>
  );
}
