/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';

import React from 'react';

import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import authReducer from '../modules/auth/reducers';

// Saga (root)
import rootSagas from './rootSagas';

import AppNavigator from '../screens/AppNavigator';

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

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
