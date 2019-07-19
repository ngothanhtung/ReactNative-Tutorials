import { select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import { Alert } from 'react-native';
// FIREBASE
import firebase from 'react-native-firebase';
const db = firebase.firestore();
// ====================================================================================================================
// get from filestore
function* getWorkItemsAsync(action) {
  yield put({ type: ActionTypes.GET_WORKITEMS_PENDING });
  db.collection('WorkItems')
    .get()
    .then((snapshot) => {
      var workitems = [];
      snapshot.forEach((doc) => {
        const workitem = doc.data();
        workitems.push(workitem);
      });
      dispatch({ type: ActionTypes.GET_WORKITEMS_SUCCESS, workitems });
      // yield put({type: ActionTypes.GET_WORKITEMS_SUCCESS, workitems});
    })
    .catch((error) => {
      // yield put({type:ActionTypes.GET_WORKITEMS_ERROR, error});
      console.log('Error getting documents', err);
    });
}

// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.GET_WORKITEMS, getWorkItemsAsync);
  // yield takeLatest(ActionTypes.WORKITEM, addWorkItemAsync);
}
