import * as ActionTypes from '../Actions/types';

const counterReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case ActionTypes.INCREASE_COUNT:
			return Object.assign({}, state, {
				count: state.count + action.number
			});
		case ActionTypes.DECREASE_COUNT:
			return Object.assign({}, state, {
				count: state.count - action.number
			});
		default:
			return state;
	}
}

export default counterReducer;