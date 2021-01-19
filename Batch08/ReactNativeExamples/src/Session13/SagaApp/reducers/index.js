import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  products: [],
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
        error: null,
      };
    case ActionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.error,
      };
    default:
      return state;
  }
}
