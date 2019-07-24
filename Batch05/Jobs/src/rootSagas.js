import { all, fork } from 'redux-saga/effects';
import workitemSagas from './modules/WorkItem/workitemSagas';

export default function* rooSagas() {
  yield all([fork(workitemSagas)]);
}
