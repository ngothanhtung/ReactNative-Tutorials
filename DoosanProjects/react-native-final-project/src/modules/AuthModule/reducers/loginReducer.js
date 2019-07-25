import * as ActionTypes from '../actions/types';

const defaultState = {
	loggedInUser: null,
	loading: false,
	error: null,
};

const loginReducer = (state = defaultState, action) => {
	switch (action.type) {
		/* GET PHOTOS ---------------------------------------------------------- */
		case ActionTypes.AUTH_LOGIN_PENDING: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.AUTH_LOGIN_SUCCESS: {
			return {
				...state,
				loggedInUser: action.loggedInUser,
				loading: false,
			};
		}

		case ActionTypes.AUTH_LOGIN_ERROR: {
			return {
				...state,
				loggedInUser: null,
				loading: false,
				error: action.error,
			};
		}

		default:
			return state;
	}
};

export default loginReducer;
