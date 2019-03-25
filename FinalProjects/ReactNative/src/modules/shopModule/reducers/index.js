import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
// import registerReducer from './registerReducer';

const shopReducer = combineReducers({
  categoryReducer,
  productReducer,
});

export default shopReducer;
