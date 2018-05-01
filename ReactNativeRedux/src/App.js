import React, { Component } from 'react'
import { View, Text, } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
