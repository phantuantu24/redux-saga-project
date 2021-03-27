import Axios from 'axios';

class AxiosService {
  constructor() {
    const instance = Axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess = (response) => response;

  handleError = (error) => Promise.reject(error);

  get = (url) => this.instance.get(url);
}

export default new AxiosService();
