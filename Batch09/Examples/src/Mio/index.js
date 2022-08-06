import React, { Component } from 'react';
import { Provider } from 'react-redux';
import numeral from 'numeral';

// REDUX STORE
import store from './store';

// APPS

import AppNavigator from './screens/AppNavigator';

import 'numeral/locales/vi';
numeral.locale('vi');

function ReduxExamples() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default ReduxExamples;
