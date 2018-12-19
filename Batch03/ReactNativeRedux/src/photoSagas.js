import * as ActionTypes from './actions/types';
import { Alert } from 'react-native';
import { all, put, call, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* GET_PHOTOS(action) {
  console.log('Action', action);
  try {
    yield put({ type: ActionTypes.GET_PHOTOS_PENDING });
    const data = yield axios.get('https://jsonplaceholder.typicode.com/photos');
    console.log(data);
    yield put({ type: ActionTypes.GET_PHOTOS_SUCCESS, photos: data });
  } catch (e) {
    yield put({ type: ActionTypes.GET_PHOTOS_ERROR });
  }
}


function* LOGIN(action) {
  console.log(action);
  try {
    if (action.email.length === 0) {
      Alert.alert('Chua nhap email');
      yield put({ type: 'LOGIN_FAILED', message: 'Chua nhap email' });
    }
    yield put({ type: 'LOGIN_PENDING' });
    const data = yield axios.post(
      'https://jsonplaceholder.typicode.com/users/login',
      { email: action.email, password: action.password }
    );
    if (data) {
      yield put({ type: 'LOGIN_FAILED', message: 'Login failed' });
    } else {
      yield put({ type: 'LOGIN_SUCCESS', user: data });
    }

  } catch (e) {
    yield put({ type: 'LOGIN_ERROR' });
  }
}

// root saga
function* photoSagas() {
  yield takeEvery(ActionTypes.GET_PHOTOS, GET_PHOTOS);
  yield takeEvery('LOGIN', LOGIN);
}

export default photoSagas;
