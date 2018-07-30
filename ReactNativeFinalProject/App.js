import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './src/modules/AuthModule/reducers';
import productReducer from './src/modules/ProductModule/reducers';

import AppNavigator from './src/navigators/AppNavigator';

// MIDDLEWARE
const middewares = [
  thunkMiddleware,
  promise(),
];

const rootReducer = combineReducers({
  authReducer,
  productReducer,
});


// STORE
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
);

export default class App extends React.Component {
  componentWillMount() {
    if (Platform.OS == 'android') {
      StatusBar.setBackgroundColor('#FFC600', true);
    }

    StatusBar.setBarStyle('light-content', true);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}