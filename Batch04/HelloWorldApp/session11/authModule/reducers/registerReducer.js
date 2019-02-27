import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  user: null,
  error: null,
  registerStatus: false,
};

const registerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_REGISTER_PENDING: {
      return {
        ...state,
        loading: true,
        user: null,
        error: null,
        registerStatus: false,
      };
    }

    case ActionTypes.AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        loading: false,
        registerStatus: action.registerStatus,
        error: null,
      };
    }

    case ActionTypes.AUTH_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        registerStatus: false,
        error: { message: action.error }
      };
    default:
      return state;
  }
}

export default registerReducer;