import * as ActionTypes from '../actions/types';

const defaultState = {
  products: [],
  loading: false
}

export default (state = { defaultState }, action) => {
  switch (action.type) {
    case `${ActionTypes.GET_PRODUCTS}_PENDING`: {
      return {
        ...state,
        loading: true,
      };
    }
    case `${ActionTypes.GET_PRODUCTS}_FULFILLED`: {
      return {
        ...state,
        products: action.payload.data,
        loading: false,
      };
    }

    case `${ActionTypes.GET_PRODUCTS}_REJECTED`: {
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