import { put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import NavigationService from '../../helpers/NavigationService';
import URL from '../../constants/host';
// ---------------------------------------------------------------------------------------------------------
function* SHOP_GET_CATEGORIES(action) {
  try {
    yield put({ type: ActionTypes.SHOP_GET_CATEGORIES_PENDING });
    const url = URL + '/categories';
    const response = yield axios.get(url);
    const categories = response.data.result;
    yield put({
      type: ActionTypes.SHOP_GET_CATEGORIES_SUCCESS,
      categories: categories,
    });
  } catch (exception) {
    console.log('SAGA ERROR (authSagas):', exception);
    yield put({
      type: ActionTypes.SHOP_GET_CATEGORIES_ERROR,
      error: exception,
    });
  }
}

// ---------------------------------------------------------------------------------------------------------
function* SHOP_GET_PRODUCTS_BY_CATEGORY(action) {
  try {
    yield put({ type: ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_PENDING });
    const url = URL + '/categories/' + action.categoryId + '/products';
    const response = yield axios.get(url);
    const products = response.data.result;
    yield put({
      type: ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_SUCCESS,
      products: products,
    });
  } catch (exception) {
    console.log('SAGA ERROR (authSagas):', exception);
    yield put({
      type: ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY_ERROR,
      error: exception,
    });
  }
}

// ---------------------------------------------------------------------------------------------------------
function* SHOP_GET_PRODUCT_BY_ID(action) {
  try {
    yield put({ type: ActionTypes.SHOP_GET_PRODUCT_BY_ID_PENDING });
    const url = URL + '/products/' + action.productId;
    const response = yield axios.get(url);
    const product = response.data.result;
    yield put({
      type: ActionTypes.SHOP_GET_PRODUCT_BY_ID_SUCCESS,
      product: product,
    });
  } catch (exception) {
    console.log('SAGA ERROR (authSagas):', exception);
    yield put({
      type: ActionTypes.SHOP_GET_PRODUCT_BY_ID_ERROR,
      error: exception,
    });
  }
}
// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.SHOP_GET_CATEGORIES, SHOP_GET_CATEGORIES);
  yield takeLatest(ActionTypes.SHOP_GET_PRODUCTS_BY_CATEGORY, SHOP_GET_PRODUCTS_BY_CATEGORY);
  yield takeLatest(ActionTypes.SHOP_GET_PRODUCT_BY_ID, SHOP_GET_PRODUCT_BY_ID);
}
