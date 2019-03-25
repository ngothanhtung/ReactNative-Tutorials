import { all, fork } from 'redux-saga/effects';
import authSagas from './authModule/authSagas';
// import feedbackSagas from './FeedbackModule/feedbackSagas';
// import chatSagas from './ChatModule/chatSagas';
// import notificationSagas from './NotificationModule/notificationSagas';
// import documentSagas from './DocumentModule/documentSagas';
// import workItemSagas from './WorkItemModule/workItemSagas';
export default function* rootSagas() {
  yield all([
    fork(authSagas),
    // fork(feedbackSagas),
    // fork(chatSagas),
    // fork(notificationSagas),
    // fork(documentSagas),
    // fork(workItemSagas),
  ]);
}
