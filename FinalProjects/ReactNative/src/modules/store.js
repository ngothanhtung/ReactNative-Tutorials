import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authModule/reducers';
import shopReducer from './shopModule/reducers';
// import feedbackReducer from './FeedbackModule/reducers';
// import chatReducer from './ChatModule/reducers';
// import notificationReducer from './NotificationModule/reducers';
// import documentReducer from './DocumentModule/reducers';
// import workItemReducer from './WorkItemModule/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middlewares } from './middlewares';

const rootReducer = combineReducers({
  authReducer,
  shopReducer,
  // feedbackReducer,
  // chatReducer,
  // notificationReducer,
  // documentReducer,
  // workItemReducer,
});

// STORE
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
