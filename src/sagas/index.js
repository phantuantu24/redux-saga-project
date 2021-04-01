import { fork } from 'redux-saga/effects';

function* watchFetchListTaskAction() {
  yield true;
  // eslint-disable-next-line no-console
  console.log('watching fetch list task');
}
function* watchCareateTaskAction() {
  yield true;
  // eslint-disable-next-line no-console
  console.log('watching create task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCareateTaskAction);
}

export default rootSaga;
