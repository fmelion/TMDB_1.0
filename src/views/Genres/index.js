import { useParams } from 'react-router-dom';
import Grid from '../../commons/Grid';
import genre from '../../utils/genreUtils';
import { genreMovies } from '../../state/reducers/genreMovies';
import { useDispatch } from 'react-redux';

const GenresView = () => {
  const dispatch = useDispatch();
  const { str } = useParams();

  const genreToSearch = genre.genres.filter(element => element.name === str);

  dispatch(genreMovies(genreToSearch[0].id));

  return <Grid type={'discoverGenre'} />;
};

export default GenresView;
