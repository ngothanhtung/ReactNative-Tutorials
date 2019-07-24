import { all, fork } from 'redux-saga/effects';
import gallerySagas from './gallerySagas';
// import workitemSagas from './modules/WorkItem/workitemSagas';

export default function* rooSagas() {
	yield all([fork(gallerySagas)]);
}
