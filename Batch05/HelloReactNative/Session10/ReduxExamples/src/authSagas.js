import { select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import { Alert } from 'react-native';

// ====================================================================================================================
function* loginAsync(action) {
	try {
		yield put({ type: ActionTypes.LOGIN_PENDING });
		const response = yield axios.post('https://reqres.in/api/login', {
			email: action.email,
			password: action.password,
		});

		// LOGIN: OK
		if (response.data) {
			yield put({
				type: ActionTypes.LOGIN_SUCCESS,
				user: {
					email: action.email,
					password: action.password,
					token: response.data.token,
				},
			});
		} else {
			Alert.alert('Thông báo', 'Đăng nhập không thành công.\nVui lòng thử lại!');
			yield put({
				type: ActionTypes.LOGIN_ERROR,
				error: {
					code: 200,
					error: response,
					message: 'Đăng nhập không thành công.\nVui lòng thử lại!',
				},
			});
		}
	} catch (exception) {
		console.log('SAGA ERROR (authSagas):', exception);
		yield put({
			type: ActionTypes.LOGIN_ERROR,
			error: exception.response,
		});
	}
}

// function* registerAsync(action) {
// 	return true;
// }

function* logger(action) {
	const state = yield select();

	console.log('action', action);
	console.log('state after', state);
}
// ====================================================================================================================
// ====================================================================================================================
export default function* sagas() {
	yield takeLatest(ActionTypes.LOGIN, loginAsync);
	yield takeEvery('*', logger);
	// yield takeEvery(ActionTypes.REGISTER, registerAsync);
}
