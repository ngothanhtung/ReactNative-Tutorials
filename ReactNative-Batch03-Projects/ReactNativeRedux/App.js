import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Product from './src/components/Product';
import Footer from './src/components/Footer';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import calculatorReducer from './src/reducers/index'

const rootReducer = combineReducers({
  calculatorReducer,
});

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(...middewares))
);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
    }
  }
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: 24 }}>
            <Product />
          </View>
          <View>
            <Footer />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}
