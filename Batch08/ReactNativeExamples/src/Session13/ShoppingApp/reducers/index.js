import * as ActionTypes from '../actions/types';

const defaultState = {
  loading: false,
  products: [],
  addedProducts: [],
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedProducts].find((item) => item.product.id === action.product.id);
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1
      // PUSH
      var addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];

      return {
        ...state,
        addedProducts: addedProducts,
      };

    case ActionTypes.REMOVE_FROM_CART:
      var addedProducts = [...state.addedProducts].filter((e) => e.product.id !== action.productId);

      return {
        ...state,
        addedProducts: addedProducts,
      };

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
    case ActionTypes.GET_PRODUCTS_FAILURE:
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
