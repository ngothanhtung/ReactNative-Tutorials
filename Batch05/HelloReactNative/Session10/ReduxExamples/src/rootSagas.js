import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
// import photoSagas from './photoSagas';

export default function* rootSagas() {
	yield all([
		fork(authSagas),
		// fork(photoSagas)
	]);
}
