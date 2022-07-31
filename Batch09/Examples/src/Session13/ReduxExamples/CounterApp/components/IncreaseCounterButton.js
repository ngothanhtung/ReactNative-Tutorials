import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { increaseCountAction } from '../actions';

function IncreaseCounterButton() {
  const dispatch = useDispatch();

  return (
    <Button
      onPress={() => {
        dispatch(increaseCountAction(1));
      }}
      title='Increase'
    />
  );
}

export default IncreaseCounterButton;
