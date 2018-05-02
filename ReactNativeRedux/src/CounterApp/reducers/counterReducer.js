import * as ActionTypes from '../actions/types';

const counterReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case ActionTypes.INCREASE_COUNT:
			return Object.assign({}, state, {
				count: state.count + 1
			});
		case ActionTypes.DECREASE_COUNT:
			return Object.assign({}, state, {
				count: state.count - 1
			});
		default:
			return state;
	}
}

export default counterReducer;