import * as ActionTypes from '../Actions/types';

const defaultState = {
  color: 'green',
};

const themeReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ActionTypes.UPDATE_THEME:
			return Object.assign({}, state, {
				color: action.color
			});
		
		default:
			return state;
	}
}

export default themeReducer;