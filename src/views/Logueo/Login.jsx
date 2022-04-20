import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { sendLoginRequest } from '../../state/reducers/user';

import useInput from '../../hooks/useInput';

const Login = () => {
  const email = useInput('');
  const password = useInput('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
      })
    ).then(() => navigate('/'));
  };

  //la linea del sendLoginRequest te devuelve un payload por ser una action

  return (
    <div>
      <label class='label is-large'>Sign in to your account</label>
      <form onSubmit={handleSubmit}>
        <div>
          <div class='control'>
            <label class='label is-large'>Email</label>
            <input
              class='input is-primary is-large is-rounded'
              aria-label='Email address'
              type='text'
              required
              placeholder='Email address'
              {...email}
            />
          </div>
          <div class='field'>
            <label class='label is-large'>Pasword</label>
            <input
              aria-label='Password'
              class='input is-primary is-large is-rounded'
              type='password'
              required
              placeholder='Password'
              {...password}
            />
          </div>
        </div>
        <br></br>
        <div>
          <button class='button is-success is-large' type='submit'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;