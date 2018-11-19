import * as ActionTypes from './actions/types';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* GET_PRODUCTS(action) {
  try {
    yield put({ type: ActionTypes.GET_PRODUCTS_PENDING });
    const response = yield axios.get('http://localhost:3000/products');
    yield put({ type: ActionTypes.GET_PRODUCTS_SUCCESS, products: response.data });
  } catch (e) {
    yield put({ type: ActionTypes.GET_PRODUCTS_ERROR, error: e });
  }
}

// root saga
function* productSagas() {
  yield takeEvery(ActionTypes.GET_PRODUCTS, GET_PRODUCTS);
}

export default productSagas;
