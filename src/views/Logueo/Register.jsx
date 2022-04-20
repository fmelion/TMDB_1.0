import * as React from 'react';
import { useNavigate } from 'react-router';

import useInput from '../../hooks/useInput';
import axios from 'axios';

const Register = () => {
  const email = useInput('');
  const password = useInput('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/users/register', {
        email: email.value,
        password: password.value,
      })
      .then(() => navigate('/login'));
  };

  return (
    <div>
      <label class='label is-large'>Create your account</label>
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
              class='input is-primary is-large is-rounded'
              aria-label='Password'
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
