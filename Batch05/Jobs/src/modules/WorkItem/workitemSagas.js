import { select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import { Alert } from 'react-native';

// ====================================================================================================================
function* addWorkItemAsync(action) {
  // CODE HERE ...
}

// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.WORKITEM, addWorkItemAsync);
}
