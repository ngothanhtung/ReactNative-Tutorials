import { put, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';

// ---------------------------------------------------------------------------------------------------------
function* AUTH_LOGIN(action) {
  // if (action.username.length === 0) {
  //   Alert.alert('Aptech', 'Username không được để trống');
  //   yield put({ type: ActionTypes.AUTH_LOGIN_INVALID });
  //   // ~  dispatch({type: ActionTypes.AUTH_LOGIN_PENDING});
  //   return;
  // }

  // if (action.password.length === 0) {
  //   Alert.alert('Aptech', 'Mật khẩu không được để trống');
  //   yield put({ type: ActionTypes.AUTH_LOGIN_INVALID });
  //   return;
  // }

  try {
    const url = 'https://us-central1-reactnativebatch04.cloudfunctions.net/login'
    const response = yield axios.post(url, {
      username: action.username,
      password: action.password,
    });

    // console.log(response);
    // LOGIN: OK

    if (response.data.user && response.data.user.length > 0) {
      yield put({
        type: ActionTypes.AUTH_LOGIN_SUCCESS,
        user: response.data.user,
        loginStatus: true
      });
    } else {
      Alert.alert('Aptech', 'Đăng nhập không thành công.\nVui lòng thử lại!');
      yield put({
        type: ActionTypes.AUTH_LOGIN_ERROR,
        error: {
          loginStatus: false,
          message: 'Đăng nhập không thành công.\nVui lòng thử lại!',
        },
      });
    }
  } catch (exception) {
    console.log('SAGA ERROR (authSagas):', exception);
    yield put({
      type: ActionTypes.AUTH_LOGIN_ERROR,
      error: exception,
    });
  }
}

// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, AUTH_LOGIN);
  // yield takeLatest(ActionTypes.AUTH_CHANGE_PASSWORD, AUTH_CHANGE_PASSWORD);
  // yield takeLatest(ActionTypes.AUTH_RECOVER_PASSWORD, AUTH_RECOVER_PASSWORD);
  // yield takeEvery(ActionTypes.AUTH_LOGIN_GUEST, AUTH_LOGIN_GUEST);
  // yield takeEvery(ActionTypes.AUTH_REGISTER_GUEST, AUTH_REGISTER_GUEST);
  // yield takeEvery(ActionTypes.AUTH_LOGOUT, AUTH_LOGOUT);
}

