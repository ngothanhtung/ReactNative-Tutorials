import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet' }}>
        <Header />
        <Login />
        <Footer />
      </View>
    );
  }
}
