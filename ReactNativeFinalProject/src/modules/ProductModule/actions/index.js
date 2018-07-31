import * as ActionTypes from './types';
import axiosClient from '../../../config/axiosClient';

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: axiosClient.get('/onlineshop/products')
    });
  };
}

export const getProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCT,
      payload: axiosClient.get('/onlineshop/products/' + id)
    });
  };
}

export const addToCart = (product, quantity) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});

export const removeFromCart = (productId) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  productId: productId,
});

export const showShoppingCart = () => ({
  type: ActionTypes.SHOW_SHOPPING_CART,
});

export const hideShoppingCart = () => ({
  type: ActionTypes.HIDE_SHOPPING_CART,
})
