import * as ActionTypes from '../actions/types';

const defaultState = {
	balance: 0,
};

const atmReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.ATM_WITHDRAW:
			return Object.assign({}, state, {
				balance: state.balance - action.money,
			});
		case ActionTypes.ATM_DEPOSIT:
			return Object.assign({}, state, {
				balance: state.balance + action.money,
			});
		default:
			return state;
	}
};

export default atmReducer;
