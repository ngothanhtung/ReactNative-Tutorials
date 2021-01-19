import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  user: null,
  error: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_FAILED: {
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: { message: action.error },
      };
    default:
      return state;
  }
};

export default authReducer;
