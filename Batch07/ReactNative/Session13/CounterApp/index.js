/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import counterReducer from './reducers';

// COMPONENT
import Counter from './components/Counter';

// ROOT REDUCER
const rootReducer = combineReducers({
  counterReducer,
});

// MIDDLEWARE
const middewares = [
  // Custom Middleware
  // logger
];

// STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares)),
);

export default function CounterApp() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 24}}>
          <Text>Welcome to Redux</Text>
          <Counter />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
