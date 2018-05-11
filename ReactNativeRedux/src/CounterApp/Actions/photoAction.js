import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:9000/gallery',
  headers: {
    'Content-Type': 'application/json'
  }
});

import * as ActionTypes from './types';

export const getPhotos = (data) => {
  return ({ type: ActionTypes.GET_PHOTOS_SUCCESS, payload: { data } });
}

export const getPhotosErrors = (error) => {
  return ({ type: ActionTypes.GET_PHOTOS_ERROR });
}

export const getPhotosPending = () => {
  return ({ type: ActionTypes.GET_PHOTOS_PENDING });
}

export const getPhotosAsync = () => {
  return (dispatch) => {
    dispatch(getPhotosPending());

    client.get('/photos')
      .then((response) => {
        dispatch(getPhotos(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getPhotosErrors());
      });
  };
}