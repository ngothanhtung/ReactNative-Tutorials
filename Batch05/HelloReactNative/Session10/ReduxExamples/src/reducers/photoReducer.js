import * as ActionTypes from '../actions/types';

const defaultState = {
	photos: [],
	loading: false,
};

const photoReducer = (state = defaultState, action) => {
	switch (action.type) {
		/* GET PHOTO ---------------------------------------------------------- */

		case ActionTypes.GET_PHOTOS_PENDING: {
			return {
				...state,
				loading: true,
			};
		}

		case ActionTypes.GET_PHOTOS_SUCCESS: {
			return {
				...state,
				photos: action.photos,
				loading: false,
			};
		}

		case ActionTypes.GET_PHOTOS_ERROR: {
			return {
				...state,
				photos: [],
				loading: false,
				error: action.error,
			};
		}

		default:
			return state;
	}
};

export default photoReducer;
