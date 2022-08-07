import React, { Component } from 'react';
import { Provider } from 'react-redux';

// REDUX STORE
// import store from './store';
import store from './storeWithinThunk';

// APPS
import CounterApp from './CounterApp';
import { SafeAreaView } from 'react-native';
import Users from './UsersApp/components/Users';

function ReduxExamples() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ padding: 24 }}>
        {/* <CounterApp /> */}
        <Users />
      </SafeAreaView>
    </Provider>
  );
}

export default ReduxExamples;
