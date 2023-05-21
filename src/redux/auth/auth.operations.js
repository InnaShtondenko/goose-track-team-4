import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// clearAuthHeader,
// publicApi,

import { setAuthHeader, privateApi, publicApi } from 'services/http';

axios.defaults.baseURL = 'https://goose-track-backend-8txo.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4000';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const register = createAsyncThunk(
  'users/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await publicApi.post('/api/users/register', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */

export const logIn = createAsyncThunk(
  'users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await publicApi.post('/api/users/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk(
  'users/logout',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await privateApi.post('/api/users/logout');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    // Reading the token from the state via getState()
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await privateApi.get('/api/users/current');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/info
 * body: { name, birthday, email, phone, telegram, avatarURL }
 */

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (formData, { getState, rejectWithValue }) => {
    // Reading the token from the state via getState()
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await privateApi.patch('/api/users/info', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
