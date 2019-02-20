import * as ActionTypes from '../actions/types';
const defaulState = {
  balance: 50000,
};
//  Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const atmReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ActionTypes.ATM_WITHDRAW:
      return Object.assign({}, state, {
        balance: state.balance - action.money
      });
    case ActionTypes.ATM_DEPOSITE:
      return Object.assign({}, state, {
        balance: state.balance + action.money
      });
    default:
      return state;
  }
}

export default atmReducer;