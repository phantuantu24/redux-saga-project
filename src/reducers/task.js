import * as Types from '../constants/task';

const initialState = {
  listTask: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_TASK:
      return {
        ...state,
        listTask: [],
      };
    case Types.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTask: action.payload.data,
      };
    case Types.FETCH_TASK_FAILED:
      return {
        ...state,
        listTask: [],
      };
    default:
      return state;
  }
};

export default taskReducer;
