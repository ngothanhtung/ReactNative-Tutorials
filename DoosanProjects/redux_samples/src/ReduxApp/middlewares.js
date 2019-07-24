// REDUX-THUNK
// import thunkMiddleware from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
	// REDUX-SAGA MIDDLEWARE
	sagaMiddleware,
	// REDUX-THUNK MIDDLEWARE
	// thunkMiddleware,
];

export { middlewares, sagaMiddleware };
