import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://goose-track-backend-8txo.onrender.com',
  // baseURL: 'http://localhost:4000',
});

export const privateApi = axios.create({
  baseURL: 'https://goose-track-backend-8txo.onrender.com',
  // baseURL: 'http://localhost:4000',
});

// Utility to add JWT
export const setAuthHeader = token => {
  privateApi.defaults.headers.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
export const clearAuthHeader = () => {
  privateApi.defaults.headers.Authorization = '';
};
