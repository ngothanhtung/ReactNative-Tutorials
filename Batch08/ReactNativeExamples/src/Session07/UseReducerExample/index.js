import React from 'react';
import Label from './Label';
import { initialState, reducer } from './reducer';
import AppContext from './AppContext';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';

export default function UseReducerExample() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Label />
      <DecreaseButton text="Decrease" />
      <IncreaseButton text="Increase" />
    </AppContext.Provider>
  );
}
