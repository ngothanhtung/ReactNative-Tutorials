import * as ActionTypes from '../actions/types';
import _ from 'lodash';

const defaultState = {
  cartItems: [
    // {
    //   product: product,
    //   quantity: 4,
    // },
  ],
};

const shoppingCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOP_ADD_PRODUCT_TO_CART: {
      var item = {
        product: action.product,
        quantity: action.quantity,
      };
      var cartItems = [...state.cartItems];
      var foundItem = _.find(cartItems, function(o) {
        return o.product._id === action.product._id;
      });

      if (foundItem === undefined) {
        var cartItems = [...state.cartItems, item];
      } else {
        foundItem.quantity = foundItem.quantity + action.quantity;
      }

      return {
        ...state,
        cartItems: cartItems,
      };
    }

    case ActionTypes.SHOP_REMOVE_PRODUCT_FROM_CART:
      var cartItems = [...state.cartItems].filter(e => e.product._id != action.product._id);
      return {
        ...state,
        cartItems: cartItems,
      };

    case ActionTypes.SHOP_CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
