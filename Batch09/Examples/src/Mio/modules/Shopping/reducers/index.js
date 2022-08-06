import * as ActionTypes from '../constants/actionTypes';

// 1. DEFAULT STATE
const defaultState = {
  addedProducts: [],
};

// 2. CREATE REDUCER
const shoppingReducer = (state = defaultState, action) => {
  // LOGIC
  switch (action.type) {
    case ActionTypes.SHOPPING_ADD_TO_CART:
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

    case ActionTypes.SHOPPING_DECREASE_FROM_CART:
      var found = [...state.addedProducts].find((item) => item.product.id === action.productId);
      if (found) {
        found.quantity--;
        if (found.quantity === 0) {
          return {
            ...state,
            addedProducts: [...state.addedProducts].filter((e) => e.product.id !== action.productId),
          };
        }

        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      }

    case ActionTypes.SHOPPING_REMOVE_FROM_CART:
      var addedProducts = [...state.addedProducts].filter((e) => e.product.id !== action.productId);

      return {
        ...state,
        addedProducts: addedProducts,
      };

    case ActionTypes.SHOPPING_EMPTY_CART:
      return {
        ...state,
        addedProducts: [],
      };

    default:
      return state;
  }
};

export default shoppingReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
