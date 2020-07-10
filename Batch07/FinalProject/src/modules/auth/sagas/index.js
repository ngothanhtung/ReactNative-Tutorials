import * as ActionTypes from '../actions/types';
import {put, takeLatest} from 'redux-saga/effects';

import LoginService from '../../../services/LoginService';

function* login(action) {
  console.log('Action', action);
  try {
    const response = yield LoginService.login(action.email, action.password);

    yield put({
      type: ActionTypes.AUTH_LOGIN_SUCCESS,
      loggedInUser: response.user._user,
    });
  } catch (error) {
    console.log(error);
    yield put({type: ActionTypes.AUTH_LOGIN_FAILED, error: error});
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, login);
}

export default sagas;
