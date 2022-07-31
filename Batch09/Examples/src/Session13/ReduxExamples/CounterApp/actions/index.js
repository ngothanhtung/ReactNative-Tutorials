import * as ActionTypes from '../constants/actionTypes';
// COUNTER
// Action Creator return Plain Object
export const increaseCountAction = (number) => {
  return {
    type: ActionTypes.COUNTER_INCREASE_COUNT, // ACTION TYPE
    number: number, // PARAMETER
  };
};

// Action Creator
export const decreaseCountAction = (number) => ({
  type: ActionTypes.COUNTER_DECREASE_COUNT, // ACTION TYPE
  number: number, //PARAMETER
});
// ------------------------------------------------------------
