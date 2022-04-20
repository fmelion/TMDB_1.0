import axios from 'axios';
import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

export const oneMovie = createAsyncThunk('ONEMOVIE', id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
    .then(res => res.data);
});

const oneMovieReducer = createReducer(
  {},
  {
    [oneMovie.fulfilled]: (state, action) => action.payload,
  }
);

export default oneMovieReducer;
