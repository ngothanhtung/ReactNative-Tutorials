import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import checkoutReducer from './checkoutReducer';

const shopReducer = combineReducers({
  categoryReducer,
  productReducer,
  shoppingCartReducer,
  checkoutReducer,
});

export default shopReducer;
