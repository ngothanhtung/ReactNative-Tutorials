import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  products: [],
  error: null,
};

const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_PENDING: {
      return {
        ...state,
        loading: true,
        products: [],
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        products: action.products,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default productReducer;
