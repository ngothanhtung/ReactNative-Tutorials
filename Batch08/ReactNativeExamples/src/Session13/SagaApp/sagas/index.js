import * as ActionTypes from '../actions/types';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getProducts_SAGA(action) {
  try {
    const url = 'https://training.softech.cloud/api/products';
    const response = yield axios.get(url);
    yield put({
      type: ActionTypes.GET_PRODUCTS_SUCCESS,
      products: response.data,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: ActionTypes.GET_PRODUCTS_ERROR, error: e });
  }
}

// root saga
function* sagas() {
  // yield all([
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople)
  // ])
  yield takeLatest(ActionTypes.GET_PRODUCTS, getProducts_SAGA);
  // yield takeLatest(ActionTypes.LOGIN, login);

  // yield takeEvery('*', function* logger(action) {
  //   const state = yield select()

  //   console.log('action', action)
  //   console.log('state after', state)
  // })
}

export default sagas;
