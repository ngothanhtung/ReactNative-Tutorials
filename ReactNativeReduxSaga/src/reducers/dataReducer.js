import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from '../constants'

import NavigationService from '../../src/NavigationService';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  status: false,
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {
        ...state,
        data: [],
        isFetching: true,
        status: false,
      }
    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        status: true,
      }
    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        status: false,
      }
    default:
      return state
  }
}