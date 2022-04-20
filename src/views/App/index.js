import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../../state/reducers/user';
import Navbar from '../Navbar';
import Register from '../Logueo/Register';
import SearchView from '../Search';
import MovieCard from '../../commons/MovieCard';
import Login from '../Logueo/Login';
import GenresView from '../Genres';
import HomeView from '../Home';
import Menu from '../Menu';
import Favourites from '../Favourites';
import { getFavourite } from '../../state/reducers/favouritesReducer';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSession());
  }, [dispatch]);

  const user = useSelector(state => state.user);

  React.useEffect(() => {
    dispatch(getFavourite({ userId: user.id }));
  }, [user]);

  return (
    <div>
      <Navbar />
      <div class='columns'>
        <div class='column is-narrow'>
          <Menu />
        </div>
        <div class='column'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/movie/:id' element={<MovieCard />} />
            <Route path='/genre/:str' element={<GenresView />} />
            <Route path='search/:str' element={<SearchView />} />
            <Route path='favourites' element={<Favourites />} />
            <Route path='' element={<HomeView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
