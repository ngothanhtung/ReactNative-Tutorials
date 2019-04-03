import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  error: null,
  results: null,
};

const checkoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOP_CHECKOUT_PENDING: {
      return {
        ...state,
        loading: true,
        results: null,
        error: null,
      };
    }

    case ActionTypes.SHOP_CHECKOUT_SUCCESS: {
      return {
        ...state,
        results: action.results,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.SHOP_CHECKOUT_ERROR:
      return {
        ...state,
        loading: false,
        results: null,
        error: action.error,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
