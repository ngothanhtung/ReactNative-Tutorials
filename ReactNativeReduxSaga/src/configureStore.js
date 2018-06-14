import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';


import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middewares = [
  // SAGA
  sagaMiddleware,
];

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middewares))
  );
  sagaMiddleware.run(sagas);
  return store;
}