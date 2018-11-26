import * as ActionTypes from './actions/types';
import { Alert } from 'react-native';
import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import axiosClient from '../../configs/axiosClient';

function* GET_PRODUCTS(action) {
  try {
    yield put({ type: ActionTypes.GET_PRODUCTS_PENDING });
    const response = yield axiosClient.get('/products');

    yield put({ type: ActionTypes.GET_PRODUCTS_SUCCESS, products: response.data });
  } catch (e) {
    console.log(e);
    yield put({ type: ActionTypes.GET_PRODUCTS_ERROR });
  }
}

// root saga
function* productSagas() {
  yield takeEvery(ActionTypes.GET_PRODUCTS, GET_PRODUCTS);
}

export default productSagas;
