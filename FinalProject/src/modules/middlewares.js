// MIDDLEWARE
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
];

export { middlewares, sagaMiddleware };