import { select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import { Alert } from 'react-native';

// ====================================================================================================================
function* loginAsync(action) {
  // CODE HERE ...
}

// ====================================================================================================================
function* registerAsync(action) {
  // CODE HERE ...
}

// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.LOGIN, loginAsync);
  yield takeLatest(ActionTypes.REGISTER, registerAsync);
}
