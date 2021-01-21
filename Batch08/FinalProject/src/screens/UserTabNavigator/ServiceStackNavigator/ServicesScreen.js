/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView } from 'react-native';
import Services from '../../../modules/main/components/Services';

export default function ServicesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Services />
    </SafeAreaView>
  );
}
