import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { middlewares } from './middlewares';

// DEBUG
import { composeWithDevTools } from 'redux-devtools-extension';

// Create Store
const store = createStore(
	rootReducer,
	// without debug
	// applyMiddleware(...middlewares),

	// within debug
	composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
