import * as ActionTypes from '../actions/types';

const defaultState = {
  addedServices: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.MAIN_ADD_TO_CART:
    case ActionTypes.MAIN_INCREASE_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedServices].find((item) => item.service.id === action.service.id);
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedServices: [...state.addedServices],
        };
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1
      // PUSH
      var addedServices = [...state.addedServices, { service: action.service, quantity: action.quantity }];

      return {
        ...state,
        addedServices: addedServices,
      };
    // ------------------------------------------------------------------------
    // DECREASE CART
    // ------------------------------------------------------------------------
    case ActionTypes.MAIN_DECREASE_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedServices].find((item) => item.service.id === action.service.id);
      if (found) {
        if (found.quantity > 0) {
          found.quantity--;
        }

        return {
          ...state,
          addedServices: [...state.addedServices],
        };
      }

      return {
        ...state,
        addedServices: addedServices,
      };

    // ------------------------------------------------------------------------
    // REMOVE FROM CART
    // ------------------------------------------------------------------------
    case ActionTypes.MAIN_REMOVE_FROM_CART:
      var addedServices = [...state.addedServices].filter((e) => e.service.id !== action.serviceId);

      return {
        ...state,
        addedServices: addedServices,
      };
    // ------------------------------------------------------------------------
    // CLEAR CART
    // ------------------------------------------------------------------------
    case ActionTypes.MAIN_CLEAR_CART:
      return defaultState;
    // ------------------------------------------------------------------------
    // DEFAULT
    // ------------------------------------------------------------------------
    default:
      return state;
  }
}
