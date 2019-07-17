import { all, fork } from 'redux-saga/effects';
import authSagas from './modules/Auth/authSagas';

export default function* sagas() {
  yield all([fork(authSagas)]);
}
