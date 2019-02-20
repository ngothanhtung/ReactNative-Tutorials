import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
// STORE
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// PROVIDER
import { Provider } from 'react-redux';
// REDUCERS
import counterReducer from './reducers/index'
// TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
import Label from './components/Label';

const rootReducer = combineReducers({
  counterReducer,
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
        </SafeAreaView>
      </Provider>
    );
  }
}
