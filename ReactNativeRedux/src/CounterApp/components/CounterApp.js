import React from 'react'
import { View } from 'react-native'
import Counter from '../containers/counter'

const CounterApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Counter />
  </View>
)

export default CounterApp;