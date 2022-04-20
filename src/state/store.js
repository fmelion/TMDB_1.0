import { configureStore } from '@reduxjs/toolkit'; //redux toolkit is a package designed to simplify the store setup, includes default middlewares including redux-thunk
import logger from 'redux-logger'; //used to show/see the logs

import userReducer from './reducers/user';
import popularMoviesReducer from './reducers/popularMovies';
import topRatedMoviesReducer from './reducers/topRatedMovies';
import genreMoviesReducer from './reducers/genreMovies';
import oneMovieReducer from './reducers/getOneMovie';
import searchMovieReducer from './reducers/searchMovie';
import favouritesReducer from './reducers/favouritesReducer';

const store = configureStore({
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    discoverGenre: genreMoviesReducer,
    oneMovie: oneMovieReducer,
    searchMovie: searchMovieReducer,
    favourites: favouritesReducer,
  },
});

export default store;
