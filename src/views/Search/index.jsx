import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '../../commons/Grid';
import { searchMovie } from '../../state/reducers/searchMovie';

const SearchView = () => {
  const dispatch = useDispatch();
  const { str } = useParams();

  dispatch(searchMovie(str));
  return <Grid type={'searchMovie'} />;
};

export default SearchView;
