import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const apiClient = () => {
  const api = axios.create({
    baseURL: 'https://some-domain.com/api/', // here go the baseURL of your api,
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
      // Authorization: "Bearer token" --> here go you bearer token
    },
    params: {},
  });
  // you can set your header like this too: api.defaults.headers.common.Authorization = 'Bearer token'
  return api;
};

export default applyCaseMiddleware(apiClient());
