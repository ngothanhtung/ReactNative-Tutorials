import * as ActionTypes from './types';
import axios from 'axios';

export const loginAsync = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_LOGIN_PENDING,
    });

    axios
      .post('https://training.softech.cloud/api/users/login', { email, password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_SUCCESS,
          user: response.data,
          loginStatus: response.data.length > 0,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_ERROR,
          error: error,
        });
      });
  };
};
