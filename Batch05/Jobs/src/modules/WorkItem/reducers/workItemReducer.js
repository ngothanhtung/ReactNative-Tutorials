import * as ActionTypes from '../actions/types';

const defaultState = {
  workitems: null,
  loading: false,
};

const workItemReducer = (state = defaultState, action) => {
  switch (action.type) {
    /* GET PHOTO ---------------------------------------------------------- */

    case ActionTypes.GET_WORKITEMS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.GET_WORKITEMS_SUCCESS: {
      return {
        ...state,
        workitems: action.workitems,
        loading: false,
      };
    }

    case ActionTypes.GET_WORKITEMS_ERROR: {
      return {
        ...state,
        workitems: null,
        loading: false,
        error: action.error,
      };
    }

    default:
      return state;
  }
};

export default workItemReducer;
