import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middlewares } from './middlewares';
import authReducer from './modules/Auth/reducers';
import workitemReducer from './modules/WorkItem/reducers';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  authReducer,
  workitemReducer,
  form: formReducer,
});

// STORE
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
