import axios from 'axios';

const singleton = Symbol();
const singletonEnforcer = Symbol();

class ApiService {
  constructor(enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }
    const {protocol, host} = (typeof window === 'object') ? window.location : null;

    this.session = axios.create({
      baseURL: `${protocol}//${host}/`
    });
  }
  static get instance() {
    // Try to get an efficient singleton
    if (!this[singleton]) {
      this[singleton] = new ApiService(singletonEnforcer);
    }

    return this[singleton];
  }

  get = (...params) => this.session.get(...params);
  post = (...params) => this.session.post(...params);
  put = (...params) => this.session.put(...params);
  patch = (...params) => this.session.patch(...params);
  remove = (...params) => this.session.delete(...params);
}

export default ApiService.instance;