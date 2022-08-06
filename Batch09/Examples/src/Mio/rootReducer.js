import { combineReducers } from 'redux';

import shoppingReducer from './modules/Shopping/reducers';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  shoppingReducer,
});

export default rootReducer;
