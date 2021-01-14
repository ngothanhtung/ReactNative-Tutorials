/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';

// COMPONENT
import Counter from './components/Counter';
import DisplayCount from './components/DisplayCount';

export default function CounterApp() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Redux</Text>
      <Counter />
      <DisplayCount />
    </SafeAreaView>
  );
}
