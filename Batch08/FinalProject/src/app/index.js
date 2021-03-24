import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, useTheme } from 'react-native-paper';
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
import { color } from 'react-native-reanimated';

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

// THEME
const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.SLL_PRIMARY,
    // primary: 'red',
    background: colors.BACKGROUND,
    accent: '#f1c40f',
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
