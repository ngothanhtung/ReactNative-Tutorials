import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './CounterReducer'

const AppReducers = combineReducers({
	counterReducer,
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

let store = createStore(
	rootReducer,
);

export default store;