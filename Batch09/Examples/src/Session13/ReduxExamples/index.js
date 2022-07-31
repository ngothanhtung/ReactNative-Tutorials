import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
import store from './store';

// APPS
import CounterApp from './CounterApp';
import { SafeAreaView } from 'react-native';

function ReduxExamples() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ padding: 24 }}>
        <CounterApp />
      </SafeAreaView>
    </Provider>
  );
}

export default ReduxExamples;
