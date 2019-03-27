import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
// import registerReducer from './registerReducer';

const shopReducer = combineReducers({
  categoryReducer,
  productReducer,
  shoppingCartReducer,
});

export default shopReducer;
