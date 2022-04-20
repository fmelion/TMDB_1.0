import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { searchMovie } from '../state/reducers/searchMovie';

const SearchBar = () => {
  const str = useInput('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchMovie({ str: str.value })).then(() =>
      navigate(`/search/${str.value}`)
    );
  };

  return (
    <form onSubmit={handleSubmit} id='searchForm'>
      <input
        className='input is-rounded input is-large'
        type='text'
        placeholder='Search here'
        {...str}
      ></input>
    </form>
  );
};

export default SearchBar;
