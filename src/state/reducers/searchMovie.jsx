import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

export const searchMovie = createAsyncThunk('SEARCHMOVIE', str => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${str}&page=1&include_adult=false`
    )
    .then(res => res.data.results);
});

const searchMovieReducer = createReducer([], {
  [searchMovie.fulfilled]: (state, action) => action.payload,
});

export default searchMovieReducer;
