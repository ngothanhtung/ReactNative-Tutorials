import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  user: [],
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
        error: null,
      };

    case ActionTypes.AUTH_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.error,
      };

    default:
      return state;
  }
}
