/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

// COMPONENT
import Counter from './components/Counter';
import DisplayCount from './components/DisplayCount';

export default function CounterApp() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 24}}>
        <Text>Welcome to Redux</Text>
        <Counter />
        <DisplayCount />
      </View>
    </SafeAreaView>
  );
}
