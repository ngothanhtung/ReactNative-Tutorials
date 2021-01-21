import { combineReducers } from 'redux';

import shoppingCartReducer from './shoppingCartReducer';
const mainReducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export default mainReducer;
