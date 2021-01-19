/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// REDUX-THUNK: ASYNC ACTIONS
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './CounterApp/reducers';
import shoppingReducer from './ShoppingApp/reducers';
import authReducer from './AuthApp/reducers';

// COMPONENT
import CounterApp from './CounterApp';
import ShoppingApp from './ShoppingApp';
import Total from './ShoppingApp/components/Total';
import AuthApp from './AuthApp';

// ROOT REDUCER
const rootReducer = combineReducers({
  counterReducer,
  shoppingReducer,
  authReducer,
});

// MIDDLEWARE
const middewares = [
  // THUNK
  thunkMiddleware,
];

// STORE
const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  composeWithDevTools(applyMiddleware(...middewares)),
  // WITHOUT DEBUG:
  // applyMiddleware(...middewares)
);

export default function Session13() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 24 }}>
          {/* <CounterApp /> */}
          {/* <ShoppingApp /> */}
          {/* <Total /> */}
          <AuthApp />
        </View>
      </SafeAreaView>
    </Provider>
  );
}
