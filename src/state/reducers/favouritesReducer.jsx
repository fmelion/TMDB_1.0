import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export const getFavourite = createAsyncThunk(
  'GETFAV',
  ({ userId, movieId }) => {
    return axios.get(`/api/favourites/getFav/${userId}`).then(res => {
      console.log('soy GETFAV y me ejectute', res.data);
      return res.data;
    });
  }
);

export const addFavourite = createAsyncThunk(
  'ADDFAV',
  ({ userId, movieId }) => {
    return axios
      .post('/api/favourites/add', {
        userId,
        movieId,
      })
      .then(() => axios.get(`/api/favourites/getFav/${userId}`))
      .then(res => res.data);
  }
);

export const removeFavourite = createAsyncThunk(
  'REMOVEFAV',
  ({ userId, movieId }) => {
    return axios
      .delete(`/api/favourites/remove/${userId}/${movieId}`)
      .then(() => axios.get(`/api/favourites/getFav/${userId}`))
      .then(res => res.data);
  }
);

const favouritesReducer = createReducer([], {
  [getFavourite.fulfilled]: (state, action) => action.payload,
  [removeFavourite.fulfilled]: (state, action) => action.payload,
  [addFavourite.fulfilled]: (state, action) => action.payload,
});

export default favouritesReducer;
