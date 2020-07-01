import * as ActionTypes from '../actions/types';

const defaultState = {
  addedProducts: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedProducts].find(
        (item) => item.product.id === action.product.id,
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedProducts: [...state.addedProducts],
        };
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1
      var addedProducts = [
        ...state.addedProducts,
        {product: action.product, quantity: action.quantity},
      ];

      return {
        ...state,
        addedProducts: addedProducts,
      };

    case ActionTypes.REMOVE_FROM_CART:
      var addedProducts = [...state.addedProducts].filter(
        (e) => e.product.id !== action.productId,
      );

      return {
        ...state,
        addedProducts: addedProducts,
      };
    default:
      return state;
  }
}
