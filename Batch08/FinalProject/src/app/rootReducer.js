import { combineReducers } from 'redux';
import authReducer from '../modules/auth/reducers';
import mainReducer from '../modules/main/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  // shoppingReducer,
});

export default rootReducer;
