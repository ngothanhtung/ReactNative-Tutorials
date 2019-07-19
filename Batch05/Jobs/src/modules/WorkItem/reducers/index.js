import { combineReducers } from 'redux';
import getWorkItemReducer from './getWorkItemReducer';
import addWorkItemReducer from './addWorkItemReducer';

const workItemReducer = combineReducers({
  getWorkItemReducer,
  addWorkItemReducer,
});

export default workItemReducer;
