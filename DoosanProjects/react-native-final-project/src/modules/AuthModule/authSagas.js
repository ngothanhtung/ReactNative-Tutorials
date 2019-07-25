import * as ActionTypes from './actions/types';
import { all, put, call, takeEvery, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import NavigationService from '../../services/NavigationService';

function* loginAsync(action) {
	const url = 'https://reqres.in/api/login';

	yield put({ type: ActionTypes.AUTH_LOGIN_PENDING });
	try {
		const response = yield axios.post(url, {
			email: action.email,
			password: action.password,
		});
		const token = response.data.token;

		yield put({
			type: ActionTypes.AUTH_LOGIN_SUCCESS,
			loggedInUser: {
				email: action.email,
				password: action.password,
				token: token,
			},
		});

		NavigationService.navigate('DrawerNavigator');
	} catch (error) {
		console.log(error);
		yield put({ type: ActionTypes.AUTH_LOGIN_ERROR, error: error });
	}
}

function* sagas() {
	yield takeEvery(ActionTypes.AUTH_LOGIN, loginAsync);
}

export default sagas;
