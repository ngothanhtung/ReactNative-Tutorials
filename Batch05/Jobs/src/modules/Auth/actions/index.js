import * as ActionTypes from './types';

export const setUser = (user) => {
  return {
    type: ActionTypes.AUTH_SET_USER,
    user,
  };
};
