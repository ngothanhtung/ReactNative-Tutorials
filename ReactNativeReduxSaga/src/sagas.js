import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './constants';
import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import getPeopleFromApi from './api';


function* getPeople(action) {
  console.log(action);
  try {
    // const data = yield call(getPeopleFromApi);
    const data = yield all([
      call(getPeopleFromApi),
      call(getPeopleFromApi),
      call(getPeopleFromApi)
    ]);
    yield put({ type: FETCHING_PEOPLE_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_PEOPLE_FAILURE });
  }
}

// root saga
function* sagas() {

  // yield all([
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople),
  //   takeEvery(FETCHING_PEOPLE, getPeople)
  // ])
  yield takeEvery(FETCHING_PEOPLE, getPeople);

  // yield takeEvery('*', function* logger(action) {
  //   const state = yield select()

  //   console.log('action', action)
  //   console.log('state after', state)
  // })
}

export default sagas;
