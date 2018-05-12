import * as ActionTypes from '../Actions/types';

const defaultState = {
  user: null,
  loading: false,
};

const authReducer = (state = defaultState , action) => {
  switch (action.type) {
    case `${ActionTypes.LOGIN}_PENDING`: {      
      return {
        ...state,
        loading: true,
      };
    }

    case `${ActionTypes.LOGIN}_FULFILLED`: {
      return {
        ...state,
        user: action.payload.data,
        loading: false,
      };
    }

    case `${ActionTypes.LOGIN}_REJECTED`: {
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message }
      };
    }

    default:
      return state;
  }
}

export default authReducer;