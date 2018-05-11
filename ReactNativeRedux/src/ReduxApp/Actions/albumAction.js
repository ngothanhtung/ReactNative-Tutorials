import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:9000/gallery',
  headers: {
    'Content-Type': 'application/json'
  }
});

import * as ActionTypes from './types';
// API
export const getAlbums = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.GET_ALBUMS,
      payload: client.get('/albums')
    });
  };
}

export const addAlbum = (album) => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.ADD_ALBUM,
      payload: client.post('/albums/add', album)
    });
  };
}