import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import form from '@/styles/Form.module.css';
import { registerApi } from 'services/api.services';
import { useRouter } from 'next/router';

function signup() {
  const [userData, SetUserData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    picture: '',
  });
  const router = useRouter();
  const handleChange = (event) => {
    SetUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerApi(userData)
      .then((data) => {
        toast.success('Enregistré avec succés');
        SetUserData({
          lastname: '',
          firstname: '',
          email: '',
          password: '',
          picture: '',
        });
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className={form.container}>
      <form className={form.box} onSubmit={handleSubmit} method='post'>
        <label htmlFor='lastname'> Nom</label>
        <input
          type='lastname'
          name='lastname'
          id='lastnameInput'
          placeholder='Nom'
          value={userData.lastname}
          onChange={handleChange}
        />
        <label htmlFor='firstname'> Prénom</label>
        <input
          type='firstname'
          name='firstname'
          id='firstnameInput'
          placeholder='Prénom'
          value={userData.firstname}
          onChange={handleChange}
        />

        <label htmlFor='email'> Email</label>
        <input
          type='email'
          name='email'
          id='emailInput'
          placeholder='E-mail'
          value={userData.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='passwordInput'
          placeholder='Password'
          value={userData.password}
          onChange={handleChange}
        />

        <button type='submit'>Valider</button>
      </form>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default signup;
