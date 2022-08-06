import * as ActionTypes from '../constants/actionTypes';
// COUNTER
// Action Creator return Plain Object
export const addToCart = (product, quantity = 1) => {
  return {
    type: ActionTypes.SHOPPING_ADD_TO_CART, // ACTION TYPE
    product, // PARAMETER,
    quantity,
  };
};

// Action Creator
export const decreaseFromCart = (productId, quantity = 1) => ({
  type: ActionTypes.SHOPPING_DECREASE_FROM_CART, // ACTION TYPE
  productId,
  quantity,
});

// Action Creator
export const removeFromCart = (productId) => ({
  type: ActionTypes.SHOPPING_REMOVE_FROM_CART, // ACTION TYPE
  productId,
});

// Action Creator
export const emptyCart = () => ({
  type: ActionTypes.SHOPPING_EMPTY_CART, // ACTION TYPE
});
// ------------------------------------------------------------
