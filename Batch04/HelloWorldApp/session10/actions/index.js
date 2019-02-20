import * as ActionTypes from './types';
// PLAIN OBJECT
export const increaseCount = (number) => ({
  type: ActionTypes.INCREASE_COUNT,
  number: number,
});

export const decreaseCount = (number) => ({
  type: ActionTypes.DECREASE_COUNT,
  number: number,
});
