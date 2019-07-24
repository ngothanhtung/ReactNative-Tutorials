import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

// MIDDLEWARE
const middewares = [];

// Create Store
const store = createStore(
	rootReducer,
	// without debug
	// applyMiddleware(...middewares),

	// within debug
	composeWithDevTools(applyMiddleware(...middewares)),
);

export default store;
