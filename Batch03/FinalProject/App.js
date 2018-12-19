import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
// STORE
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// PROVIDER
import { Provider } from 'react-redux';
// REDUCERS
import productReducer from './src/modules/product/reducers';
// import accountReducer from './src/modules/account/reducers';
// TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// SAGA
import createSagaMiddleware from 'redux-saga';
// MY SAGAS
import productSagas from './src/modules/product/productSagas';
// import accountSagas from './src/modules/product/accountSagas';

// NAVIGATORS
import SwitchNavigator from './src/navigators/SwitchNavigator';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  productReducer,
  // accountReducer,
});

const middewares = [
  // SAGA
  sagaMiddleware,
];


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middewares))
  // applyMiddleware(...middewares)
);

// RUN SAGAS
sagaMiddleware.run(productSagas);
// sagaMiddleware.run(accountSagas);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <SwitchNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
