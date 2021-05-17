import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://smartgarden.ddns.net/php-login-registration-api/',
});

const initialState = {
  isLoggedIn: false,
  status: 'idle',
  user: null,
  role: null,
  error: null,
};

export const loggingIn = createAsyncThunk(
  'login/loggingIn',
  async (user, thunkAPI) => {
    const response = await Axios.post('login.php', {
      user: user.login,
      pass: user.password,
    });

    if (response.data.success === 0)
      return thunkAPI.rejectWithValue(response.data);

    return response.data;
  }
);

export const fetchUser = createAsyncThunk(
  'login/fetchUser',
  async (loginToken) => {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + loginToken;
    const { data } = await Axios.get('user-info.php');
    return data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutUser(state, action) {
      state.isLoggedIn = false;
      state.status = 'idle';
      state.user = null;
      state.role = null;
      localStorage.removeItem('loginToken');
    },
  },
  extraReducers: {
    [loggingIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loggingIn.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isLoggedIn = true;
      localStorage.setItem('loginToken', action.payload.token);
    },
    [loggingIn.rejected]: (state, action) => {
      state.status = 'failed';
      state.isLoggedIn = false;
      state.error = action.payload.message;
    },
    [fetchUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.isLoggedIn = true;
      state.user = action.payload.user.user;
      state.role = action.payload.user.role;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
