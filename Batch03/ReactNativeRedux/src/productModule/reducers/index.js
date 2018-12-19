import * as ActionTypes from '../actions/types';
const defaulState = {
  products: [],
  loading: false
};

const productReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case ActionTypes.GET_PRODUCTS_ERROR:
      return {
        ...state,
        products: [],
        loading: false,
      };
    default:
      return state;
  }
}

export default productReducer;