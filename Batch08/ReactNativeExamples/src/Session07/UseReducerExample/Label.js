/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';
import AppContext from './AppContext';

export default function Label() {
  const { state } = React.useContext(AppContext);

  return (
    <View>
      <Text style={{ color: 'red' }}>COUNT: {state.count}</Text>
    </View>
  );
}
