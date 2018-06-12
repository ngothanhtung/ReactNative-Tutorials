import * as ActionTypes from './types';

import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:9000/user',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: client.post('/login', { email, password })
    });
  };
}