import { createStore, applyMiddleware } from 'redux';
import { middlewares, sagaMiddleware } from './middlewares';
import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

import { composeWithDevTools } from 'redux-devtools-extension';

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(
  rootReducer,
  // ONLY FOR DEBUG
  __DEV__ ? composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSagas);

export default store;
