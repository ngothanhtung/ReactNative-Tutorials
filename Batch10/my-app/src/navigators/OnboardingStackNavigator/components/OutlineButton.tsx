/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import COLORS from '@/constants/COLORS';

const height = 48;
type Props = {
  icon: string;
  color: string;
};

export default function OutlineButton({ icon, color }: Props) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderStyle: 'solid',
        // backgroundColor: colors.primary,
        borderRadius: height / 2,
      }}
    >
      <Icon name={icon} color={color} size={16} style={{ marginRight: 8 }} />
      <Text style={{ color: 'white' }}></Text>
    </TouchableOpacity>
  );
}
