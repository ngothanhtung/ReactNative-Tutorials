import * as ActionTypes from '../constants/actionTypes';

// 1. DEFAULT STATE
const defaultState = {
  count: 0, // const [count, setCount] = React.useState(0)
};

// 2. CREATE REDUCER
const counterReducer = (state = defaultState, action) => {
  // LOGIC
  switch (action.type) {
    case ActionTypes.COUNTER_INCREASE_COUNT:
      const newCount = state.count + action.number;
      return { ...state, count: newCount };

    case ActionTypes.COUNTER_DECREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count - action.number,
      });
    default:
      return state;
  }
};

export default counterReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
