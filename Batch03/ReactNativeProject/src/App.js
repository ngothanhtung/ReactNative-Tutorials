import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Copyright from './Copyright';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet' }}>
        {/* <Header />
        <Login />
        <Footer /> */}
        <View style={{ height: 24 }}></View>
        <Login />
        {/* <Copyright name="Samsung" /> */}
      </View>
    );
  }
}
