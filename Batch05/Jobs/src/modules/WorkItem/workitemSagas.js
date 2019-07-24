import { select, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from './actions/types';
import axios from 'axios';
import { Alert } from 'react-native';
// FIREBASE
import firebase from 'react-native-firebase';
import NavigationService from '../../NavigationService';

const db = firebase.firestore();
// ====================================================================================================================
// get from filestore
function* getWorkItemsAsync(action) {
  try {
    yield put({ type: ActionTypes.GET_WORKITEMS_PENDING });
    const snapshot = yield db.collection('WorkItems').get();
    var workitems = [];
    snapshot.forEach((doc) => {
      const workitem = doc.data();
      workitems.push(workitem);
    });
    yield put({ type: ActionTypes.GET_WORKITEMS_SUCCESS, workitems });
  } catch (error) {
    yield put({ type: ActionTypes.GET_WORKITEMS_ERROR, error });
    console.log('Error getting documents', err);
  }
}
// ====================================================================================================================
// add a workitem & save to filestore
function* addWorkItemAsync(action) {
  try {
    yield put({ type: ActionTypes.ADD_WORKITEM_PENDING });
    yield db.collection('WorkItems').add(action.workitem);

    yield put({ type: ActionTypes.ADD_WORKITEM_SUCCESS, workitem: action.workitem });
    NavigationService.navigate('WorkItemsScreen');
  } catch (error) {
    yield put({ type: ActionTypes.ADD_WORKITEM_ERROR, error });
  }
}
// ====================================================================================================================
export default function* sagas() {
  yield takeLatest(ActionTypes.GET_WORKITEMS, getWorkItemsAsync);
  yield takeLatest(ActionTypes.ADD_WORKITEM, addWorkItemAsync);
}
