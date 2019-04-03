import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  categories: [],
  error: null,
};

const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOP_GET_CATEGORIES_PENDING: {
      return {
        ...state,
        loading: true,
        categories: [],
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.categories,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default categoryReducer;
