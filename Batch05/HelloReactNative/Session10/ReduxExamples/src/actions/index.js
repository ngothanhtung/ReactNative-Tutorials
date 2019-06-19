import * as ActionTypes from './types';
// COUNTER
export const increaseCount = (number) => {
	return {
		type: ActionTypes.INCREASE_COUNT,
		number: number,
	};
};
// increaseCount(1) <=> {
//   type: ActionTypes.INCREASE_COUNT,
//   number: 1,
// }

export const decreaseCount = (number) => ({
	type: ActionTypes.DECREASE_COUNT,
	number: number,
});

export const withDraw = (money) => ({
	type: ActionTypes.ATM_WITH_DRAW,
	money: money,
});

export const deposit = (money) => ({
	type: ActionTypes.ATM_DEPOSITE,
	money: money,
});
