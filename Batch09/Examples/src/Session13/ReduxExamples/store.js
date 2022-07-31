import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

// REDUX STORE
const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(...middewares),
    // REDUX TOOLS
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

// Without Debug
// const store = createStore(rootReducer);
export default store;
