/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import auth from '../modules/auth/reducers';

// Saga (root)
import rootSagas from './rootSagas';

import AppNavigator from '../screens/AppNavigator';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth,
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

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'red',
    // accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
