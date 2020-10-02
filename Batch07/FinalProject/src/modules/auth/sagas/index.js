import * as ActionTypes from '../actions/types';
import { put, takeLatest } from 'redux-saga/effects';

import AuthService from '../../../services/AuthService';

function* signIn(action) {
  console.log('Action', action);
  try {
    const response = yield AuthService.signIn(action.email, action.password);

    // Get profile theo uid
    const profile = yield AuthService.getProfile(response.user._user.uid);

    let user = response.user._user;
    user.profile = profile;
    yield put({
      type: ActionTypes.AUTH_SIGNIN_SUCCESS,
      signedInUser: user,
    });

    console.log(profile);
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.AUTH_SIGNIN_FAILED, error: error });
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_SIGNIN, signIn);
}

export default sagas;
