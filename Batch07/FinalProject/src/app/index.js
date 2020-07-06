/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import authReducer from '../modules/auth/reducers';

// Saga (root)
import rootSagas from './rootSagas';

// ROOT REDUCER
const rootReducer = combineReducers({
  authReducer,
  // shoppingReducer,
});

// MIDDLEWARE
//Saga (middleware)
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
// Root Saga

// Saga (run)
sagaMiddleware.run(rootSagas);

export default function Session13() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, padding: 24}}>
          <Text>Welcome to React Native</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}
