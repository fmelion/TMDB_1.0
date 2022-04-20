import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

export const genreMovies = createAsyncThunk('GENREMOVIES', id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`
    )
    .then(res => res.data.results);
});

export const genreMoviesReducer = createReducer([], {
  [genreMovies.fulfilled]: (state, action) => action.payload,
});

export default genreMoviesReducer;
