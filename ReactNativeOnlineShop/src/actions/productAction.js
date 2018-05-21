import * as ActionTypes from './types';
import client from '../config/index';

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: client.get('/products')
    });
  };
}
