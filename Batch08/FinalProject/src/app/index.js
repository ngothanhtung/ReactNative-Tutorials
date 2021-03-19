/* eslint-disable react-native/no-inline-styles */

import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from '../modules/auth/reducers';
import mainReducer from '../modules/main/reducers';

// Saga (root)
import rootSagas from './rootSagas';

import AppNavigator from '../screens/AppNavigator';
import colors from '../constants/colors';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  // shoppingReducer,
});

// MIDDLEWARE

//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  // Custom Middleware
  // logger

  // SAGA
  sagaMiddleware,
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

// STORE

const store = createStore(
  rootReducer,

  // ONLY FOR DEBUG
  __DEV__ ? composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(...middlewares),
);
// Root Saga

// Saga (run)
sagaMiddleware.run(rootSagas);

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    // primary: colors.PRIMARY,
    primary: colors.SLL_PRIMARY,
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar animated={true} backgroundColor={colors.SLL_PRIMARY} />
        <AppNavigator />
      </PaperProvider>
    </Provider>
  );
}
