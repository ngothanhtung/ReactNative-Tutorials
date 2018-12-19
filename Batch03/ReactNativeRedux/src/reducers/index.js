import * as ActionTypes from '../actions/types';
const defaulState = {
  total: 999,
  // -----------------
  photos: [],
  loading: false
};

const calculatorReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ActionTypes.CALCULATE_TOTAL:
      var total = action.price * action.quantity * (100 - action.discount) / 100;
      return Object.assign({}, state, {
        total: total
      });
    case ActionTypes.RESET_TOTAL:
      return Object.assign({}, state, {
        total: 0
      });
    case ActionTypes.GET_PHOTOS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        loading: false,
      };
    case ActionTypes.GET_PHOTOS_ERROR:
      return {
        ...state,
        photos: [],
        loading: false,
      };
    default:
      return state;
  }
}

export default calculatorReducer;