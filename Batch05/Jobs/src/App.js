import React, { Component } from 'react';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './screens/AppNavigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
