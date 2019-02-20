import * as ActionTypes from './types';
// PLAIN OBJECT
export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  username: username,
  password: password
});

export const increaseCount = (number) => ({
  type: ActionTypes.INCREASE_COUNT,
  number: number,
});

export const decreaseCount = (number) => ({
  type: ActionTypes.DECREASE_COUNT,
  number: number,
});



export const withdraw = (money) => ({
  type: ActionTypes.ATM_WITHDRAW,
  money: money,
});


export const deposite = (money) => ({
  type: ActionTypes.ATM_DEPOSITE,
  money: money,
});