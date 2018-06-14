import * as ActionTypes from './types';
import axiosClient from '../../../config/axiosClient';

export const getProducts = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS,
      payload: axiosClient.get('/products')
    });
  };
}
