import * as ActionTypes from './types';

// COUNTER
export const increaseCountAction = (number) => ({
  type: ActionTypes.INCREASE_COUNT,
  number: number,
});

export const decreaseCountAction = (number) => ({
  type: ActionTypes.DECREASE_COUNT,
  number: number,
});
