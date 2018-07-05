import * as ActionTypes from '../actions/types';

const defaultState = {
  products: null,
  loading: false
}

export default (state = { defaultState }, action) => {
  switch (action.type) {
    case `${ActionTypes.GET_PRODUCTS}_PENDING`: {
      return {
        ...state,
        loading: true,
        products: null,
        errors: null,
      };
    }
    case `${ActionTypes.GET_PRODUCTS}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        errors: null,
      };
    }

    case `${ActionTypes.GET_PRODUCTS}_REJECTED`: {
      return {
        ...state,
        loading: false,
        products: null,
        errors: { message: action.payload.message }
      };
    }

    default:
      return state;
  }
}