import * as ActionTypes from '../actions/types';

const defaultState = {
  user: null,
  loading: false,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* GET PHOTO ---------------------------------------------------------- */

    case ActionTypes.LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    }

    case ActionTypes.LOGIN_ERROR: {
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

export default loginReducer;
