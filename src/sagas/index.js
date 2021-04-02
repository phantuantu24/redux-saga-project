import {
  call,
  fork,
  put,
  take,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import {
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from '../actions/task';
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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select((state) => state.task.listTask);
  const filterTask = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
  // non - blocking
  yield fork(watchFetchListTaskAction);
  yield takeLatest(Types.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;

// fork as if-else or switch-case
// code line under of 'take' key are implemented whenever action is dispatched
// function will be called through 'call' keywarod
// action will be called by 'put' keyword
// everything will be delay by 'delay' keyword
// 'takeLatest(actionType, generator function)' key word instead of take and forks, execute and get result of latest action, if we need to keep user's action
// 'takeEvery(actionType, generator function)' key word instead of take and forks, execute immediately if active, don't care the before action finished or not
// 'select' keyword to get data from store of saga
