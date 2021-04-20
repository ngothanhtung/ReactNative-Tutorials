/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator color={colors.PRIMARY} />
      <Text style={{ color: colors.PRIMARY_FONT, marginTop: 12 }}>Đang tải dữ liệu ...</Text>
    </View>
  );
}
