import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { oneMovie } from '../state/reducers/getOneMovie';

const MovieCard = () => {
  const dispatch = useDispatch();
  const movie = useSelector(state => state.oneMovie);

  const { id } = useParams();

  if (!movie.title) {
    dispatch(oneMovie(id));
  }

  return (
    <div class='box'>
      <div class='column is-half is-offset-one-quarter'>
        <div class='columns is-half is-centered'>
          <figure class='image column is-half is-centered'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </figure>
        </div>
        <div class='columns is-half is-centered'>
          <h2 class='title is-2'>{movie.title}</h2>
        </div>
        <div class='columns is-half is-centered'>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
