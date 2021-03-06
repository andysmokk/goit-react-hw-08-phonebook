import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
  isNotification: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isNotification = {
        status: 'success',
        message: 'You have successfully registered!',
      };
    },
    [registerUser.rejected](state, action) {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isLoggedIn = false;
      state.isNotification = {
        status: 'error',
        message: 'Registration failed. Try again!',
      };
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isNotification = {
        status: 'success',
        message: 'Authorization was successful!',
      };
    },
    [logInUser.rejected](state, action) {
      // state.user = action.payload.user;
      // state.token = action.payload.token;
      state.isLoggedIn = false;
      state.isNotification = {
        status: 'error',
        message: 'Failed to authorize. Try again!',
      };
    },
    [logOutUser.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isNotification = {
        status: 'success',
        message: 'You are logged out of your personal account!',
      };
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
