import React from 'react';
import { View } from 'react-native';
import CounterContainer from './Containers/counterContainer';

const CounterApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <CounterContainer />
  </View>
)

export default CounterApp;