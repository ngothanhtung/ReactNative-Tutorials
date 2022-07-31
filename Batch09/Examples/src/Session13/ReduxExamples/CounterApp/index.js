import React from 'react';
import CounterLabel from './components/CounterLabel';
import DecreaseCounterButton from './components/DecreaseCounterButton';
import IncreaseCounterButton from './components/IncreaseCounterButton';

function CounterApp() {
  return (
    <React.Fragment>
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </React.Fragment>
  );
}

export default CounterApp;
