import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Counter from './components/Counter';
// STORE
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// PROVIDER
import { Provider } from 'react-redux';
// REDUCERS
import counterReducer from './reducers/index'
import atmReducer from './reducers/atmReducer'
// TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
import Label from './components/Label';
import ATM from './components/ATM'
import BalanceLabel from './components/BalanceLabel';

const rootReducer = combineReducers({
  counterReducer,
  atmReducer
});

const middewares = [
];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
  // without debug: 
  // applyMiddleware(...middewares)
);

export default class CounterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Counter />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Label />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ATM />
            <BalanceLabel />
          </View>
          <Button title="NOP TIEN" onPress={() => {
            store.dispatch({
              type: 'ATM_DEPOSITE',
              money: 5000
            })
          }} />
        </SafeAreaView>
      </Provider>
    );
  }
}
