import { combineReducers } from 'redux';

import counterReducer from './CounterApp/reducers';
import userReducer from './UsersApp/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  userReducer,
  // bankReducer,
});

export default rootReducer;
