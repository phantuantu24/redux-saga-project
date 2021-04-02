import * as UiTypes from '../constants/ui';

const initialState = {
  showLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UiTypes.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case UiTypes.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
