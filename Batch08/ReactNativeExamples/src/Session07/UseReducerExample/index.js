import React from 'react';
import { SafeAreaView } from 'react-native'
import Label from './Label';
import { initialState, reducer } from './reducer';
import AppContext from './AppContext';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';

export default function UseReducerExample() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <SafeAreaView>
        <Label />
        <DecreaseButton text="Decrease" />
        <IncreaseButton text="Increase" />
      </SafeAreaView>
    </AppContext.Provider>
  );
}
