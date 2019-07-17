import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} />
      </Provider>
    );
  }
}
