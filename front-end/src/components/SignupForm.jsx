import React from 'react';
import { useState } from 'react';

function SignupForm() {
  const [formData, SetFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    SetFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    SetFormData({ email: '', password: '' });
  };
  return (
    <div className='formContainer'>
      <form className='formBox' onSubmit={handleSubmit}>
        <label htmlFor='email'> Email</label>
        <input
          type='email'
          name='email'
          id='emailInput'
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='passwordInput'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
