import * as ActionTypes from '../actions/types';
const defaulState = {
  total: 999
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
    default:
      return state;
  }
}

export default calculatorReducer;