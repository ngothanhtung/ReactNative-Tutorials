import * as ActionTypes from './types';
// SHOPPING CART
export const addToCart = (product, quantity) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});
