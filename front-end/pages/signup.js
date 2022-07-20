import React from 'react';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import form from '@/styles/Form.module.css';
import { registerApi } from 'services/api.services';
import { useRouter } from 'next/router';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Image from 'next/image';

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
    console.log(event.target.value);
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
      <h1 className={form.title}>_Incription</h1>
      <form className={form.box} onSubmit={handleSubmit} method='post'>
        <TextField
          name='lastname'
          label='Nom'
          id='lastnameInput'
          placeholder='Nom'
          variant='standard'
          value={userData.lastname}
          onChange={handleChange}
        />
        <TextField
          name='firstname'
          label='Prénom'
          id='firstnameInput'
          placeholder='Prénom'
          variant='standard'
          value={userData.firstname}
          onChange={handleChange}
        />

        <TextField
          name='email'
          label='Email'
          id='emailInput'
          placeholder='E-mail'
          variant='standard'
          value={userData.email}
          onChange={handleChange}
          required
        />

        <TextField
          name='password'
          label='Mot de passe'
          id='passwordInput'
          placeholder='Password'
          value={userData.password}
          variant='standard'
          onChange={handleChange}
          required
          helperText='Min 8 caractères'
        />

        <div>
          <InputLabel id='demo-simple-select-helper-label'>Selectionnez un image de profil</InputLabel>
          <Select
            fullWidth
            name='picture'
            label='Image'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={userData.picture}
            onChange={handleChange}
          >
            <MenuItem value={'/assets/pictures/profile.png'}>
              <Image
                className={form.pic}
                height='50'
                width='50'
                src='/assets/pictures/profile.png'
              />
            </MenuItem>
            <MenuItem value={'/assets/pictures/profile2.png'}>
              <Image
                className={form.pic}
                height='50'
                width='50'
                src='/assets/pictures/profile2.png'
              />
            </MenuItem>
            <MenuItem value={'/assets/pictures/profile3.png'}>
              <Image
                className={form.pic}
                height='50'
                width='50'
                src='/assets/pictures/profile3.png'
              />
            </MenuItem>
            <MenuItem value={'/assets/pictures/profile4.png'}>
              <Image
                className={form.pic}
                height='50'
                width='50'
                src='/assets/pictures/profile4.png'
              />
            </MenuItem>
            <MenuItem value={'/assets/pictures/profile5.png'}>
              <Image
                className={form.pic}
                height='50'
                width='50'
                src='/assets/pictures/profile5.png'
              />
            </MenuItem>
          </Select>
        </div>
        <Button
          variant='contained'
          type='submit'
          sx={{ backgroundColor: '#fb6565' }}
        >
          Valider
        </Button>
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
