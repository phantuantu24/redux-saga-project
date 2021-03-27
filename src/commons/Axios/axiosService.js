import Axios from 'axios';

class AxiosService {
  constructor() {
    const instance = Axios.create();
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosService();
