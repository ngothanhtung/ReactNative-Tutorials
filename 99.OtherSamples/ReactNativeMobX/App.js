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
import LoginStatus from './src/LoginStatus';
import Movies from './src/Movies';


export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Observer>
          {() =>
            <View style={{ flex: 1 }}>
              <Login />
              <Movies />
              <LoginStatus />
            </View>}
        </Observer>
      </Provider>
    );
  }
}
