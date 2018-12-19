import * as ActionTypes from '../Actions/types';

const defaultState = {
  albums: [],
  loading: false,
};

const albumReducer = (state = { defaultState }, action) => {
  switch (action.type) {
    /* GET ALBUMS ---------------------------------------------------------- */
    case `${ActionTypes.GET_ALBUMS}_PENDING`: {      
      return {
        ...state,
        loading: true,
      };
    }

    case `${ActionTypes.GET_ALBUMS}_FULFILLED`: {
      return {
        ...state,
        albums: action.payload.data,
        loading: false,
      };
    }

    case `${ActionTypes.GET_ALBUMS}_REJECTED`: {
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message }
      };
    }

    /* ADD ALBUM ----------------------------------------------------------- */
    case `${ActionTypes.ADD_ALBUM}_PENDING`: {      
      return {
        ...state,
        loading: true,
      };
    }

    case `${ActionTypes.ADD_ALBUM}_FULFILLED`: {
      return {
        ...state,
        albums: [...state.albums, action.payload.data],
        loading: false,
      };
    }

    case `${ActionTypes.ADD_ALBUM}_REJECTED`: {
      return {
        ...state,
        loading: false,
        errors: { message: action.payload.message }
      };
    }

    default:
      return state;
  }
}

export default albumReducer;