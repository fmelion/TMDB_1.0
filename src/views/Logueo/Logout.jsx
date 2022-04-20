import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { sendLogoutRequest } from '../../state/reducers/user';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(sendLogoutRequest()).then(navigate('/login'));
  };

  return (
    <div>
      <button
        onClick={handleOnclick}
        type='submit'
        class='button is-light'
        color='inherit'
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
