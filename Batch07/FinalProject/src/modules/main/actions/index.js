import * as ActionTypes from './types';

export const addToCart = (service, quantity = 1) => ({
  type: ActionTypes.ADD_TO_CART,
  service: service,
  quantity: quantity,
});

export const removeFromCart = (serviceId) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  serviceId: serviceId,
});

export const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
});
