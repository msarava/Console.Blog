import React from 'react';

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('first');
  };
  return (
    <div className='formContainer'>
      <form className='formBox' onSubmit={handleSubmit}>
        <label htmlFor='email'> Email</label>
        <input type='email' name='email' id='emailInput' />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='passwordInput' />

        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
