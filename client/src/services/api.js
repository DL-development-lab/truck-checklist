import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', //TODO: move to .env
});

export default api;
