import * as ActionTypes from '../actions/types';
import {all, put, call, select, takeEvery} from 'redux-saga/effects';

function* getProducts(action) {
  console.log('Action', action);
  try {
    // const data = yield getPeopleFromApi({});
    // const data = yield call(getPeopleFromApi, {});
    // const data = yield all([
    //   call(getPeopleFromApi),
    //   call(getPeopleFromApi),
    //   call(getPeopleFromApi)
    // ]);
    // yield put({type: ActionTypes.GET_PRODUCTS_SUCCESS, data});
    // NavigationService.navigate('MainScreen');
  } catch (e) {
    yield put({type: ActionTypes.GET_PRODUCTS_FAILURE});
  }
}

// root saga
function* sagas() {
  // yield all([
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople)
  // ])
  yield takeEvery(ActionTypes.GET_PRODUCTS, getProducts);

  // yield takeEvery('*', function* logger(action) {
  //   const state = yield select()

  //   console.log('action', action)
  //   console.log('state after', state)
  // })
}

export default sagas;
