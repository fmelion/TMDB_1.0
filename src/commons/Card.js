import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavourite } from '../state/reducers/favouritesReducer';
import { oneMovie } from '../state/reducers/getOneMovie';
import FavButton from '../utils/FavButton';

const Card = ({ element }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state => state.user);

  const handleOnclick = id => {
    dispatch(oneMovie(id)).then(() => navigate(`/movie/${id}`));
  };

  return (
    <div class='card'>
      <div class='card-image' onClick={() => handleOnclick(element.id)}>
        <figure class='image is-4by5'>
          <img
            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
            alt={element.title}
          />
        </figure>
      </div>
      <div class='card-content'>
        <div class='media'>
          <div class='media-content'>
            <p class='title is-4'>{element.title}</p>
          </div>
        </div>

        <div class='content'>{`${element.overview.slice(0, 150)}...`}</div>
      </div>
      {user.id ? <FavButton element={element} /> : null}
    </div>
  );
};

export default Card;
