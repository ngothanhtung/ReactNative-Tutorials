import { combineReducers } from 'redux';
import addWorkItemReducer from './addWorkItemReducer';

const workitemReducer = combineReducers({
  addWorkItemReducer,
});

export default workitemReducer;
