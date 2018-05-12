import * as ActionTypes from './types';

import axios from 'axios';
const client = axios.create({
  baseURL: 'http://192.168.72.23:9000/user',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = (username, password) => {
  console.log({ username, password });
  return (dispatch) => {
    dispatch({
      type: ActionTypes.INCREASE_COUNT,
      number: 99
    });
    dispatch({
      type: ActionTypes.LOGIN,
      payload: client.post('/login', { email: username, password })
    });
  };
}