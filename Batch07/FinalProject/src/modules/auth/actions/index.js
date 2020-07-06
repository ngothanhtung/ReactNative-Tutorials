import * as ActionTypes from './types';

export const loginAction = (email, password) => ({
  type: ActionTypes.AUTH_LOGIN,
  email,
  password,
});

export const registerAction = (email, password) => ({
  type: ActionTypes.AUTH_REGISTER,
  email,
  password,
});
