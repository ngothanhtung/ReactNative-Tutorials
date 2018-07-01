/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Observer,
  Provider,
} from 'mobx-react/native';

import stores from './src/AppStores';
import Login from './src/Login';


export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Observer>
          <Login />
        </Observer>
      </Provider >
    );
  }
}
