/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, Text, View } from 'react-native';

import COLORS from '@/constants/COLORS';

export default function Footer() {
  return (
    <View style={{ paddingHorizontal: 48, paddingBottom: Platform.OS === 'ios' ? 24 : 6 }}>
      <Text style={{ fontSize: 12, color: COLORS.gray, textAlign: 'center' }}>By continuing you agree Taskez’s Terms of</Text>
      <Text style={{ fontSize: 12, color: COLORS.gray, textAlign: 'center' }}>Services & Privacy Policy</Text>
    </View>
  );
}
