import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	// REDUX-SAGA MIDDLEWARE
	sagaMiddleware,
];

export { middlewares, sagaMiddleware };
