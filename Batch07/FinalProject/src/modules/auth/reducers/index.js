import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  signedInInUser: null,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_SIGNIN:
      return {
        ...state,
        loading: true,
      };

    case ActionTypes.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        signedInInUser: action.signedInInUser,
        error: null,
      };

    case ActionTypes.AUTH_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        signedInInUser: null,
        error: action.error,
      };

    case ActionTypes.AUTH_SIGNOUT:
      return {
        ...state,
        signedInInUser: null,
      };

    default:
      return state;
  }
}
