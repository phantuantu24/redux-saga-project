import { fork, take, call } from 'redux-saga/effects';
import * as Types from '../constants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';

function* watchFetchListTaskAction() {
  yield take(Types.FETCH_TASK);
  const resp = yield call(getList);
  const { status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    // dispatch action fetListTaskSuccess
  } else {
    // dispatch fetListTaskFailed
  }
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

// fork as if-else or switch-case
// code line under of 'take' key are implemented whenever action is dispatched
