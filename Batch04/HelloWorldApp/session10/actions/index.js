import * as ActionTypes from './types';
import axios from 'axios';

// PLAIN OBJECT
export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  username: username,
  password: password
});

export const increaseCount = (number) => ({
  type: ActionTypes.INCREASE_COUNT,
  number: number,
});

export const decreaseCount = (number) => ({
  type: ActionTypes.DECREASE_COUNT,
  number: number,
});



export const withdraw = (money) => ({
  type: ActionTypes.ATM_WITHDRAW,
  money: money,
});


export const deposite = (money) => ({
  type: ActionTypes.ATM_DEPOSITE,
  money: money,
});

export const addComment = (username, commentText) => ({
  type: ActionTypes.FB_ADD_COMMENT,
  username: username,
  commentText: commentText
});


export const loginAsync = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.AUTH_LOGIN_PENDING
    });

    axios.post('https://us-central1-reactnativebatch04.cloudfunctions.net/login', { username: username, password: password })
      .then((response) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_SUCCESS,
          user: response.data.user,
          loginStatus: response.data.user.length > 0
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.AUTH_LOGIN_ERROR,
          error: error
        });
      });
  };
}