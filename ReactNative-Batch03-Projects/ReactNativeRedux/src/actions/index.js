import axios from 'axios';
import * as ActionTypes from './types';
// PLAIN OBJECT
export const calculateTotal = (price, quantity, discount) => ({
  type: ActionTypes.CALCULATE_TOTAL,
  price: price,
  quantity: quantity,
  discount: discount
});

export const resetTotal = () => ({
  type: ActionTypes.RESET_TOTAL,
});

// --------------------------------------
export const getPhotosAsync = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_PHOTOS_PENDING });
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        dispatch({
          type: ActionTypes.GET_PHOTOS_SUCCESS,
          photos: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.GET_PHOTOS_ERROR,
          error: error
        });
      });
  }
}