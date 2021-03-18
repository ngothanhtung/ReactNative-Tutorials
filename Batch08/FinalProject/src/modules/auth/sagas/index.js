import * as ActionTypes from '../actions/types';
import { put, takeLatest } from 'redux-saga/effects';

import AuthService from '../../../services/AuthService';
import FirestoreService from '../../../services/FirestoreService';

function* signIn(action) {
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

    // console.log(profile);
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.AUTH_SIGNIN_FAILED, error: error });
  }
}

function* autoSignIn(action) {
  try {
    // Get profile theo uid
    const profile = yield AuthService.getProfile(action.user.uid);

    // CHAY TEST
    const parent = yield FirestoreService.getStudentOfParent('x6zVuiAu5HXU7eFsnOGmVwE6Wxi1');
    console.log('parent: ', parent);

    let user = action.user;
    user.profile = profile;
    yield put({
      type: ActionTypes.AUTH_SIGNIN_SUCCESS,
      signedInUser: user,
    });

    // console.log(profile);
  } catch (error) {
    console.log(error);
    yield put({ type: ActionTypes.AUTH_SIGNIN_FAILED, error: error });
  }
}

function* signOut() {
  try {
    yield AuthService.signOut();

    yield put({
      type: ActionTypes.AUTH_SIGNOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_SIGNIN, signIn);
  yield takeLatest(ActionTypes.AUTH_AUTO_SIGNIN, autoSignIn);
  yield takeLatest(ActionTypes.AUTH_SIGNOUT, signOut);
}

export default sagas;
