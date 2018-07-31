import * as ActionTypes from '../actions/types';

const defaultState = {
  products: [],
  product: null,
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case `${ActionTypes.GET_PRODUCTS}_PENDING`: {
      return {
        ...state,
        loading: true,
        products: null,
        errors: null,
      };
    }
    case `${ActionTypes.GET_PRODUCTS}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        errors: null,
      };
    }

    case `${ActionTypes.GET_PRODUCTS}_REJECTED`: {
      return {
        ...state,
        loading: false,
        products: null,
        errors: { message: action.payload.message }
      };
    }


    case `${ActionTypes.GET_PRODUCT}_PENDING`: {
      return {
        ...state,
        loading: true,
        product: null,
        errors: null,
      };
    }
    case `${ActionTypes.GET_PRODUCT}_FULFILLED`: {
      return {
        ...state,
        loading: false,
        product: action.payload.data,
        errors: null,
      };
    }

    case `${ActionTypes.GET_PRODUCT}_REJECTED`: {
      return {
        ...state,
        loading: false,
        product: null,
        errors: { message: action.payload.message }
      };
    }

    // SHOPPING CART
    case ActionTypes.SHOW_SHOPPING_CART:
      return {
        ...state,
        shoppingCartVisible: true,
      }

    case ActionTypes.HIDE_SHOPPING_CART:
      return {
        ...state,
        shoppingCartVisible: false,
      }

    case ActionTypes.ADD_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1	
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
      if (found) {
        found.quantity++;
        var total = updateTotal([...state.addedProducts]);
        return {
          ...state,
          addedProducts: [...state.addedProducts],
          total: total
        }
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1	
      var addedProducts = [...state.addedProducts, { product: action.product, quantity: action.quantity }];
      var total = updateTotal(addedProducts);
      return {
        ...state,
        addedProducts: addedProducts,
        total: total
      };

    case ActionTypes.REMOVE_FROM_CART:
      var addedProducts = [...state.addedProducts].filter(e => e.product.id != action.productId);
      var total = updateTotal(addedProducts);
      return {
        ...state,
        addedProducts: addedProducts,
        total: total
      };

    // DEFAULT
    default:
      return state;
  }
}