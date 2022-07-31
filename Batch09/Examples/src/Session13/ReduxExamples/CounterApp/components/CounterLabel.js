import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

function CounterLabel() {
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>{count}</Text>
    </View>
  );
}

export default CounterLabel;
