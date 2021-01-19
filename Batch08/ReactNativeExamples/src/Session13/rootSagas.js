import { all, fork } from 'redux-saga/effects';
import appSagas from './SagaApp/sagas';
// import authSagas from './AuthApp/sagas';

export default function* rootSagas() {
  yield all([fork(appSagas)]);
  // yield all([fork(authSagas)]);
}
