import * as ActionTypes from '../Actions/types';

const defaultState = {
  loading: false,
  user: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case `${ActionTypes.LOGIN}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case `${ActionTypes.LOGIN}_FULFILLED`: {
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        error: null,
      };
    }

    case `${ActionTypes.LOGIN}_REJECTED`: {
      return {
        ...state,
        loading: false,
        user: null,
        errors: { message: action.payload.message }
      };
    }

    default:
      return state;
  }
}

export default authReducer;