import { all, fork } from 'redux-saga/effects';
import gallerySagas from './modules/GalleryModule/gallerySagas';

export default function* rooSagas() {
	yield all([fork(gallerySagas)]);
}
