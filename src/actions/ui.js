import * as UiTypes from '../constants/ui';

export const showLoadiog = () => ({
  type: UiTypes.SHOW_LOADING,
});

export const hideLoadiog = () => ({
  type: UiTypes.HIDE_LOADING,
});
