import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

//createAsyncThunk is a function that accepts a Redux action type string and a callback function that should return a promise

export const sendLoginRequest = createAsyncThunk(
  'LOGIN',
  ({ email, password }) => {
    return axios
      .post('/api/users/login', {
        email,
        password,
      })
      .then(res => res.data);
  }
);

export const getSession = createAsyncThunk('SESSION', () => {
  return axios.get('/api/users/me').then(res => res.data);
});

export const sendLogoutRequest = createAsyncThunk('LOGOUT', () => {
  return axios.post('/api/users/logout').then(res => res.data);
});

//the AsyncThunk gives you back an action with the three states pending fulfilled o rejected
//if the action is Asynchronous and you want to use it later you have to return it back

const userReducer = createReducer([], {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [getSession.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
});
//because of the AsyncThunk here you can use the state you want, if you want to do something when your state is fulfilled thats why you put ".fulfilled"
//state is the actual situation, action tells you what has happened

export default userReducer;
