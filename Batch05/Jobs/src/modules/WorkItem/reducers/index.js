import { combineReducers } from 'redux';
import workItemReducer from './workItemReducer';
import addWorkItemReducer from './addWorkItemReducer';

const workitemReducer = combineReducers({
  workItemReducer,
  addWorkItemReducer,
});

export default workitemReducer;
