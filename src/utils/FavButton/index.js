import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  getFavourite,
  addFavourite,
  removeFavourite,
} from '../../state/reducers/favouritesReducer';

const FavButton = ({ element }) => {
  const dispatch = useDispatch();

  //console.log('yo soy el element ID', element.id);

  const user = useSelector(state => state.user);

  const favs = useSelector(state => state.favourites);

  //const [movies, setMovies] = useState([]);

  //console.log('soy tu favvvvvsss', favs);

  let fav = favs?.filter(favorito => favorito.movieId === element.id);

  //console.log('yo soy el fav en particular', fav);

  const handleOnClick = accion => {
    if (accion === 'remove') {
      dispatch(removeFavourite({ userId: user.id, movieId: element.id }));
    } else {
      dispatch(addFavourite({ userId: user.id, movieId: element.id }));
    }
  };

  return fav[0] ? (
    <div class='buttons'>
      <button class='button is-success' onClick={() => handleOnClick('remove')}>
        Remove from Favourite
      </button>
    </div>
  ) : (
    <div class='buttons'>
      <button class='button is-danger' onClick={() => handleOnClick('add')}>
        Add to Favourite
      </button>
    </div>
  );
};

export default FavButton;
