import * as ActionTypes from './actions/types';
import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';

function* getPhotosAsync(action) {
	yield put({ type: ActionTypes.GALLERY_GET_PHOTOS_PENDING });
	try {
		const response = yield fetch('https://jsonplaceholder.typicode.com/photos');
		const json = yield response.json();
		yield put({ type: ActionTypes.GALLERY_GET_PHOTOS_SUCCESS, photos: json });
	} catch (error) {
		console.log(error);
		yield put({ type: ActionTypes.GALLERY_GET_PHOTOS_ERROR, error: error });
	}
}

function* getAlbumsAsync(action) {
	yield put({ type: ActionTypes.GALLERY_GET_ALBUMS_PENDING });
	try {
		const response = yield fetch('https://jsonplaceholder.typicode.com/albums');
		const json = yield response.json();
		yield put({ type: ActionTypes.GALLERY_GET_ALBUMS_SUCCESS, albums: json });
	} catch (error) {
		console.log(error);
		yield put({ type: ActionTypes.GALLERY_GET_ALBUMS_ERROR, error: error });
	}
}

function* sagas() {
	yield takeEvery(ActionTypes.GALLERY_GET_PHOTOS, getPhotosAsync);
	// yield takeLatest(ActionTypes.GALLERY_GET_PHOTOS, getPhotosAsync);
	yield takeEvery(ActionTypes.GALLERY_GET_ALBUMS, getAlbumsAsync);
}

export default sagas;
