import * as Actions from '../actions/actionTypes';

export const increase = () => ({
  type: Actions.COUNTER_INCREMENT,
})

export const decrease = () => ({
  type: Actions.COUNTER_DECREMENT,
})