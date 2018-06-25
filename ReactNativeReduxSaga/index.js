import React from 'react';
import {
  AppRegistry
} from 'react-native';



import { Provider } from 'react-redux';
import configureStore from './src/configureStore';



import NavigationService from './src/NavigationService';

//import App from './src/PeopleContainer';
import App from './src/App';
const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }} />
  </Provider>
)

AppRegistry.registerComponent('ReactNativeReduxSaga', () => ReduxApp);
