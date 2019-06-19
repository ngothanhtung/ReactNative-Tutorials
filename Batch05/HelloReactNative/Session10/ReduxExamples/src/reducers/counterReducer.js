import * as ActionTypes from '../actions/types';

const defaultState = {
	count: 0,
};

const counterReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.INCREASE_COUNT:
			// var state = state;
			// state.count = state.count + action.number;
			// return state;
			return Object.assign({}, state, {
				count: state.count + action.number,
			});
		case ActionTypes.DECREASE_COUNT:
			return Object.assign({}, state, {
				count: state.count - action.number,
			});
		default:
			return state;
	}
};

export default counterReducer;
