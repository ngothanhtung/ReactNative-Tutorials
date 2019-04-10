import * as ActionTypes from '../actions/types';
import _ from 'lodash';

const defaultState = {
  loading: false,
  products: [],
  product: null,
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

    // --------------------------------------------------------------
    case ActionTypes.SHOP_GET_PRODUCT_BY_ID_PENDING:
      return {
        ...state,
        loading: true,
        product: null,
        error: null,
      };
    case ActionTypes.SHOP_GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.product,
        error: null,
      };
    case ActionTypes.SHOP_GET_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        product: null,
        error: action.error,
      };

    // ------------------------------
    case ActionTypes.SHOP_GET_PRODUCTS_PAGING_PENDING: {
      return {
        ...state,
        loading: true,
        // products: [],
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_PRODUCTS_PAGING_SUCCESS: {
      var products = [];
      if (action.page === 1) {
        products = [...action.products];
      } else {
        products = _.concat(state.products, action.products);
      }

      return {
        ...state,
        products: products,
        loading: false,
        error: null,
      };
    }

    case ActionTypes.SHOP_GET_PRODUCTS_PAGINGD_ERROR:
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
