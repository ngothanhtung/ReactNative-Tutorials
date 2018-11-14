import * as ActionTypes from './actions/types';
import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* GET_PHOTOS(action) {
  console.log('Action', action);
  try {
    yield put({ type: ActionTypes.GET_PHOTOS_PENDING });
    const data = yield axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(data);
    yield put({ type: ActionTypes.GET_PHOTOS_SUCCESS, photos: data });
  } catch (e) {
    yield put({ type: ActionTypes.GET_PHOTOS_ERROR });
  }
}

// root saga
function* photoSagas() {
  yield takeEvery(ActionTypes.GET_PHOTOS, GET_PHOTOS);
}

export default photoSagas;
