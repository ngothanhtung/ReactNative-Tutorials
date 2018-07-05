import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  loggedInUser: null,
  errors: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${ActionTypes.AUTH_LOGIN}_PENDING`: {
      return {
        ...state,
        loading: true,
        loggedInUser: null,
        errors: null,
      };
    }
    case `${ActionTypes.AUTH_LOGIN}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload.data,
        errors: null,
      };
    }

    case `${ActionTypes.AUTH_LOGIN}_REJECTED`: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        errors: { message: action.payload.message }
      };
    }

    default:
      return state;
  }
}