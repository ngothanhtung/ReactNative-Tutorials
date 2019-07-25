import { all, fork } from 'redux-saga/effects';
import gallerySagas from './modules/GalleryModule/gallerySagas';
import authSagas from './modules/AuthModule/authSagas';

export default function* rooSagas() {
	yield all([fork(gallerySagas), fork(authSagas)]);
}
