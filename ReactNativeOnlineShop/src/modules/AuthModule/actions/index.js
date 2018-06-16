import * as ActionTypes from './types';
import axiosClient from '../../../config/axiosClient';



export const login = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_LOGIN,
      payload: axiosClient.post('/login', { email, password })
    });
  };
}
