import { combineReducers } from 'redux';

import counterReducer from './CounterApp/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  // bankReducer,
});

export default rootReducer;
