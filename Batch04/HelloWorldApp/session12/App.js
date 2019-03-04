import React from 'react';
import { Provider } from 'react-redux';

import { sagaMiddleware } from './src/modules/middlewares';
import rootSagas from './src/modules/rootSagas';
import store from './src/modules/store';
// import Login from './modules/authModule/components/Login'
import AppNavigator from './src/screens/SwitchNavigator';
// NavigationService:
// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import NavigationService from './src/helpers/NavigationService';
// SAGA
sagaMiddleware.run(rootSagas);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        {/* <Login /> */}
      </Provider>
    );
  }
}
