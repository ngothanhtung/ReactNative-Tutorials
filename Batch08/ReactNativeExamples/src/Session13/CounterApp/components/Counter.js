/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { increaseCountAction, decreaseCountAction } from '../actions';

export default function Counter() {
  const dispatch = useDispatch();
  // const [count, setCount] = React.useState(0);
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{count}</Text>
      <View height={4} />
      <Button
        title="Increase"
        onPress={() => {
          dispatch(increaseCountAction(1));
        }}
      />
      <View height={4} />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch(decreaseCountAction(1));
        }}
      />
    </View>
  );
}
