import { useDispatch } from 'react-redux';
import Grid from '../../commons/Grid';
import { popularMovies } from '../../state/reducers/popularMovies';

const HomeView = () => {
  const dispatch = useDispatch();

  dispatch(popularMovies());

  return (
      <Grid type={'popularMovies'} />
  );
};

export default HomeView;
