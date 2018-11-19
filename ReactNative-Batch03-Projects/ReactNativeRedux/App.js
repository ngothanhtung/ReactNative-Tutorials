import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import Product from './src/components/Product';
import Footer from './src/components/Footer';
import Photos from './src/components/Photos';
// STORE
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// PROVIDER
import { Provider } from 'react-redux';
// REDUCER
import calculatorReducer from './src/reducers/index'
import productReducer from './src/productModule/reducers/index'
// THUNK
import thunkMiddleware from 'redux-thunk';
// TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// SAGA
import createSagaMiddleware from 'redux-saga';
import photoSagas from './src/photoSagas';
import productSagas from './src/productModule/productSagas';

import Product from './src/productModule/components/Product'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  calculatorReducer,
  productReducer
});

const middewares = [
  // THUNK
  thunkMiddleware,
  // SAGA
  sagaMiddleware,
];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
  // applyMiddleware(...middewares)
);

sagaMiddleware.run(photoSagas);
sagaMiddleware.run(productSagas);


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
          {/* <View style={{ flex: 1, padding: 24 }}>
            <Product />
          </View>
          <View>
            <Footer />
          </View> */}
          {/* <Photos /> */}
          <Product />
          <Text>
            Products
          </Text>
        </SafeAreaView>
      </Provider>
    );
  }
}
