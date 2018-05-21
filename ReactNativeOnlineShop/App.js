import React, { Component } from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './src/reducers';

import AppNavigator from './src/index';

// MIDDLEWARE
const middewares = [
  thunkMiddleware,
  promise(),
];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}