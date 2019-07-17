import * as ActionTypes from '../actions/types';

const defaultState = {
  user: null,
  loading: false,
};

const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* GET PHOTO ---------------------------------------------------------- */

    case ActionTypes.REGISTER_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    }

    case ActionTypes.REGISTER_ERROR: {
      return {
        ...state,
        user: null,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default registerReducer;
