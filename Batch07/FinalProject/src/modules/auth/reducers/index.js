import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  signedInUser: null,
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
        signedInUser: action.signedInUser,
        error: null,
      };

    case ActionTypes.AUTH_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        signedInUser: null,
        error: action.error,
      };

    case ActionTypes.AUTH_SIGNOUT_SUCCESS:
      return {
        ...state,
        signedInUser: null,
      };

    default:
      return state;
  }
}
