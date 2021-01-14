/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function DisplayCount() {
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <View>
      <Text style={{ color: 'red' }}>DISPLAY COUNT: {count}</Text>
    </View>
  );
}
