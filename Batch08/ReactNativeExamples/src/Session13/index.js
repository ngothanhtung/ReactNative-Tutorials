/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// REDUX-THUNK: ASYNC ACTIONS
import thunkMiddleware from 'redux-thunk';

// Saga (import)
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

// Saga (root)
import rootSagas from './rootSagas';

import counterReducer from './CounterApp/reducers';
import shoppingReducer from './ShoppingApp/reducers';
import authReducer from './AuthApp/reducers';
import sagaReducer from './SagaApp/reducers';

// COMPONENT
import CounterApp from './CounterApp';
import ShoppingApp from './ShoppingApp';
import Total from './ShoppingApp/components/Total';
import AuthApp from './AuthApp';
import SagaApp from './SagaApp';

// ROOT REDUCER
const rootReducer = combineReducers({
  counterReducer,
  shoppingReducer,
  authReducer,
  sagaReducer,
});

// MIDDLEWARE
//Saga (middleware)
const sagaMiddleware = createSagaMiddleware();

const middewares = [
  // THUNK
  thunkMiddleware,
  // SAGA
  sagaMiddleware,
];

// STORE
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middewares)),
  // WITHOUT DEBUG:
  // applyMiddleware(...middewares)
);

// Saga (run)
sagaMiddleware.run(rootSagas);

export default function Session13() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 24 }}>
          {/* <CounterApp /> */}
          {/* <ShoppingApp /> */}
          {/* <Total /> */}
          {/* <AuthApp /> */}
          <SagaApp />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
