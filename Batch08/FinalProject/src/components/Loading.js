/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator />
      <Text>Loading ...</Text>
    </View>
  );
}
