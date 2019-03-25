import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const authReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default authReducer;
