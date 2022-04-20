import { Link } from 'react-router-dom';
import genre from '../../utils/genreUtils';

const Menu = () => {
  return (
    <div class='column'>
      {genre.genres.map(genre => (
        <div class='buttons'>
          <Link to={`/genre/${genre.name}`}>
            <button class='button is-primary is-responsive'>
              {genre.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
