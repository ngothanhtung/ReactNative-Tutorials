import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  loggedInUser: [],
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
        loggedInUser: action.loggedInUser,
        error: null,
      };

    case ActionTypes.AUTH_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: action.error,
      };

    default:
      return state;
  }
}
