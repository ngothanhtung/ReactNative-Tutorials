import * as ActionTypes from '../actions/types';

const defaultState = {
  user: null,
  loading: false,
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    // ================================================================================================================
    case ActionTypes.AUTH_SET_USER: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.user,
        error: null,
      };
    }

    case ActionTypes.LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedInUser: action.user,
        loading: false,
      };
    }

    case ActionTypes.LOGIN_ERROR: {
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
