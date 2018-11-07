import * as ActionTypes from './types';
// PLAIN OBJECT
export const calculateTotal = (price, quantity, discount) => ({
  type: ActionTypes.CALCULATE_TOTAL,
  price: price,
  quantity: quantity,
  discount: discount
});

export const resetTotal = () => ({
  type: ActionTypes.RESET_TOTAL,
});

