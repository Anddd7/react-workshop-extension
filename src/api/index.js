import axios from 'axios';

const Axios = axios.create({
  baseURL: '',
  timeout: 60000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const API = {
  get (url, data) {
    return Axios.get(`${url}`);
  },
  post (url, data) {
    return Axios.post(`${url}`, data);
  }
};

export default API;
