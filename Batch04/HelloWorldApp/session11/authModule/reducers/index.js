import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  user: null,
  error: null,
  loginStatus: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
        loginStatus: false,
      };
    }

    case ActionTypes.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
        loginStatus: action.loginStatus,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        loginStatus: false,
        error: { message: action.error }
      };
    default:
      return state;
  }
}

export default authReducer;