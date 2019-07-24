import { all, fork } from 'redux-saga/effects';
import authSagas from './modules/Auth/authSagas';
import workitemSagas from './modules/WorkItem/workitemSagas';

export default function* sagas() {
  yield all([fork(authSagas), fork(workitemSagas)]);
}
