import * as ActionTypes from './types';
// SHOPPING CART
const products = [
  { id: 1, name: 'iPhone 6', price: 600, discount: '10' },
  { id: 2, name: 'iPhone 7', price: 800, discount: '5' },
  { id: 3, name: 'iPhone 8', price: 1000, discount: '0' },
  { id: 4, name: 'iPhone X', price: 1200, discount: '0' },
]

export const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
  products: products,
});

export const addToCart = (product, quantity) => ({
  type: ActionTypes.ADD_TO_CART,
  product: product,
  quantity: quantity,
});

export const removeFromCart = (productId) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  productId, productId,
});

export const showShoppingCart = (status) => ({
  type: ActionTypes.SHOW_SHOPPING_CART,
});

export const hideShoppingCart = () => ({
  type: ActionTypes.HIDE_SHOPPING_CART,
})

