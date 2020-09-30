import * as ActionTypes from '../actions/types';

const defaultState = {
  addedServices: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      // FIND ITEM BEFORE ADD TO CART, IF EXISTS THEN UPDATE QUANTITY, ELSE ADD NEW ITEM WITH QUANTITY = 1
      var found = [...state.addedServices].find(
        (item) => item.service.id === action.service.id,
      );
      if (found) {
        found.quantity++;
        return {
          ...state,
          addedServices: [...state.addedServices],
        };
      }

      // ELSE ADD NEW ITEM WITH QUANTITY = 1
      // PUSH
      var addedServices = [
        ...state.addedServices,
        { service: action.service, quantity: action.quantity },
      ];

      return {
        ...state,
        addedServices: addedServices,
      };

    // ------------------------------------------------------------------------
    // REMOVE FROM CART
    // ------------------------------------------------------------------------
    case ActionTypes.REMOVE_FROM_CART:
      var addedServices = [...state.addedServices].filter(
        (e) => e.service.id !== action.serviceId,
      );

      return {
        ...state,
        addedServices: addedServices,
      };

    default:
      return state;
  }
}
