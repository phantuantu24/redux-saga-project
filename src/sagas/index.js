import { call, fork, put, take, delay } from 'redux-saga/effects';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../actions/task';
import { hideLoadiog, showLoadiog } from '../actions/ui';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants/index';
import * as Types from '../constants/task';

/**
 * Step 1: take action fetchTask
 * Step 2: call api
 * Step 3: Display Loading Bar
 * Step 4: check success and failed case
 * Step 5: Close Loading Bar
 */
function* watchFetchListTaskAction() {
  while (true) {
    yield take(Types.FETCH_TASK);
    // blocking then show loading before call api
    yield put(showLoadiog());
    const resp = yield call(getList);
    const { data, status } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    // delay before close loading bar
    yield delay(1000);
    // close loading bar
    yield put(hideLoadiog());
  }
}

function* watchCareateTaskAction() {
  yield true;
  // eslint-disable-next-line no-console
  console.log('watching create task');
}

function* rootSaga() {
  // non - blocking
  yield fork(watchFetchListTaskAction);
  yield fork(watchCareateTaskAction);
}

export default rootSaga;

// fork as if-else or switch-case
// code line under of 'take' key are implemented whenever action is dispatched
// function will be called through 'call' keywarod
// action will be called by 'put' keyword
// everything will be delay by 'delay' keyword
