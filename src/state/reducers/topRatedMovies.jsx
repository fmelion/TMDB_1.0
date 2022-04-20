import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

export const topRatedMovies = createAsyncThunk('TOPRATED', () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    )
    .then(res => res.data.results);
});

export const topRatedMoviesReducer = createReducer([], {
  [topRatedMovies.fulfilled]: (state, action) => action.payload,
});

export default topRatedMoviesReducer;