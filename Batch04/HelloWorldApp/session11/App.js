import React from 'react';
import { Provider } from 'react-redux';

import { sagaMiddleware } from './middlewares';
import rootSagas from './rootSagas';
import store from './store';

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
        {/* <AppNavigator /> */}
      </Provider>
    );
  }
}
