import * as ActionTypes from '../actions/types';
const defaulState = {
  count: 0,
};
//  Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const counterReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count + action.number
      });
    case ActionTypes.DECREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count - action.number
      });
    default:
      return state;
  }
}

export default counterReducer;