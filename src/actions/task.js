import * as Types from '../constants/task';
import * as TaskAPI from '../apis/task';

export const fetchListTask = () => ({
  type: Types.FETCH_TASK,
});

export const fetchListTaskSuccess = (data) => ({
  type: Types.FETCH_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const fetchListTaskFailed = (error) => ({
  type: Types.FETCH_TASK_FAILED,
  payload: {
    error,
  },
});
/**
 * Step 1: fetchTaskListRequest()
 * Step 2: I want to reset State => [] (reset to [] then we write in reducers)
 * Step 3: fetchListTaskSuccess( data response )
 * Step 4: fetchListTaskFailed( error )
 */
export const fetchTaskListRequest = () => (dispatch) => {
  dispatch(fetchListTask());
  return TaskAPI.getList()
    .then((res) => {
      const { data } = res;
      dispatch(fetchListTaskSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchListTaskFailed(error));
    });
};
