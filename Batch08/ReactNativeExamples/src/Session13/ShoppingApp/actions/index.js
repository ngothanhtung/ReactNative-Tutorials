import * as ActionTypes from './types';

export const addToCart = (product, quantity) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});

export const removeFromCart = (productId) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  productId: productId,
});

export const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
});
