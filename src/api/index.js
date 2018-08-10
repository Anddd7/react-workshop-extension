import axios from 'axios';

const Axios = axios.create({
  baseURL: '',
  timeout: 60000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

function Module (name) {
  this.name = name;
  this.get = (url) => Axios.get(`${this.name}/api/v1${url}`);
  this.post = (url, data) => Axios.post(`${this.name}/api/v1${url}`, data);
}

const API = {
    BILIBILI: new Module('bilibili')
};


export default API;
