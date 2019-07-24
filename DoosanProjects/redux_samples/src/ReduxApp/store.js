import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// REDUX-THUNK
import thunkMiddleware from 'redux-thunk';

// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

// MIDDLEWARE
const middewares = [
	// REDUX-THUNK MIDDLEWARE
	thunkMiddleware,
];

// Create Store
const store = createStore(
	rootReducer,
	// without debug
	// applyMiddleware(...middewares),

	// within debug
	composeWithDevTools(applyMiddleware(...middewares)),
);

export default store;
