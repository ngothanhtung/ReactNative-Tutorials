import * as ActionTypes from '../actions/types';

const defaultState = {
	balance: 1000000,
};

const atmReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.ATM_WITH_DRAW:
			// var state = state;
			// state.count = state.count + action.number;
			// return state;
			return Object.assign({}, state, {
				balance: state.balance - action.money,
			});
		case ActionTypes.ATM_DEPOSITE:
			return Object.assign({}, state, {
				balance: state.balance + action.money,
			});
		default:
			return state;
	}
};

export default atmReducer;
