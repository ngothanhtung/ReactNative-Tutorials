import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { decreaseCountAction } from '../actions';

function DecreaseCounterButton() {
  const dispatch = useDispatch();

  return (
    <Button
      onPress={() => {
        dispatch(decreaseCountAction(5));
      }}
      title='Decrease'
    />
  );
}

export default DecreaseCounterButton;
