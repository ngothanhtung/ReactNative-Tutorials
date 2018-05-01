import React from 'react'
import { View } from 'react-native'
import CounterContainer from './containers/counterContainer'

const CounterApp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <CounterContainer />
  </View>
)

export default CounterApp;