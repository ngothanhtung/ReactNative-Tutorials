import createSagaMiddleware from 'redux-saga';
//Saga (middleware)
export const sagaMiddleware = createSagaMiddleware();

export const middlewares = [
  // Custom Middleware
  // logger
  // SAGA
  sagaMiddleware,
];
