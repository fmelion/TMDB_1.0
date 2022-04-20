import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../Logueo/Logout';
import SearchBar from '../../commons/SearchBar';

const Navbar = () => {
  
  const user = useSelector(state => state.user);

  return (
    <nav
      className='navbar'
      role='navigation'
      aria-label='main navigation'
      className='navbar is-success'
    >
      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item'>
            <p className='title is-1 is-spaced'>
              <Link to='/'>TMDB</Link>
            </p>
          </a>
        </div>

        <div className='navbar-item'>
          <SearchBar />
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            {user.email ? (
              <a>
                <Logout />
              </a>
            ) : (
              <div className='buttons'>
                <a className='button is-light'>
                  <Link to='/login'>
                    <strong>Log in</strong>
                  </Link>
                </a>
                <a className='button is-light'>
                  <Link to='/register'>
                    <strong>Sign up</strong>
                  </Link>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
