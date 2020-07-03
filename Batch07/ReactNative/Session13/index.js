/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import counterReducer from './CounterApp/reducers';
import shoppingReducer from './ShoppingApp/reducers';

// COMPONENT
import CounterApp from './CounterApp';
import ShoppingApp from './ShoppingApp';

// ROOT REDUCER
const rootReducer = combineReducers({
  counterReducer,
  shoppingReducer,
});

// MIDDLEWARE
//Saga
const sagaMiddleware = createSagaMiddleware();
const middewares = [
  // Custom Middleware
  // logger

  // SAGA
  sagaMiddleware,
];

// STORE
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middewares)),
);

// Run Saga
sagaMiddleware.run(sagas);

export default function Session13() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 24}}>
          {/* <Text>Welcome to Redux</Text>
          <CounterApp /> */}
          <ShoppingApp />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
