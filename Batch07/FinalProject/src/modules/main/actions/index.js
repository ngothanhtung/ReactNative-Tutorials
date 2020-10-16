import * as ActionTypes from './types';

export const addToCartAction = (service, quantity = 1) => ({
  type: ActionTypes.MAIN_ADD_TO_CART,
  service: service,
  quantity: quantity,
});

export const increaseCartAction = (service, quantity = 1) => ({
  type: ActionTypes.MAIN_INCREASE_CART,
  service: service,
  quantity: quantity,
});

export const decreaseCartAction = (service, quantity = 1) => ({
  type: ActionTypes.MAIN_DECREASE_CART,
  service: service,
  quantity: quantity,
});

export const removeFromCartAction = (serviceId) => ({
  type: ActionTypes.MAIN_REMOVE_FROM_CART,
  serviceId: serviceId,
});

export const clearCartAction = () => ({
  type: ActionTypes.MAIN_CLEAR_CART,
});
