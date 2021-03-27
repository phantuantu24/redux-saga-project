import axiosService from '../commons/Axios/axiosService';
import { API_ENDPOINT } from '../constants/index';

export const getList = () => {
  const url = 'tasks';
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
