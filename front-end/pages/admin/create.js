import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import form from '@/styles/CreateForm.module.css';
import { useRouter } from 'next/router';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createOnePostAPI, getCategoryAPI } from 'services/api.services';

export default function create({ categories }) {
  const [newPost, SetNewPost] = useState({
    title: '',
    content: '',
    category: '',
    picture: '',
  });
  const router = useRouter();
  const handleChange = (event) => {
    SetNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createOnePostAPI(newPost)
      .then(() => {
        toast.success('Enregistré avec succés');
        SetNewPost({
          title: '',
          content: '',
          category: '',
          picture: '',
        });
        setTimeout(() => {
          router.push('/admin');
        }, 1500);
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className={form.container}>
      <h1 className={form.title}>_Créer un billet</h1>
      <form className={form.box} onSubmit={handleSubmit} method='post'>
        <TextField
          name='title'
          label='Titre'
          id='titleInput'
          placeholder='Titre'
          variant='standard'
          value={newPost.title}
          onChange={handleChange}
        />
        <TextField
          name='content'
          label='Corps du texte'
          id='contentInput'
          placeholder='Votre texte...'
          variant='outlined'
          value={newPost.content}
          onChange={handleChange}
          multiline
          rows={10}
        />
        <TextField
          name='picture'
          label='Image'
          id='pictureInput'
          placeholder='URL'
          variant='standard'
          value={newPost.picture}
          onChange={handleChange}
        />

        <div>
          <InputLabel id='demo-simple-select-helper-label'>
            Selectionnez une catégorie
          </InputLabel>
          <Select
            fullWidth
            displayEmpty={false}
            name='category'
            id='demo-simple-select'
            value={newPost.category}
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className={form.btnContainer}>
          <Button
            variant='contained'
            type='submit'
            sx={{ backgroundColor: '#fb6565' }}
          >
            Enregistrer
          </Button>{' '}
          <Button
            variant='outline'
            onClick={() => router.back()}
            sx={{ color: '#fb6565' }}
          >
            Annuler
          </Button>
        </div>
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
export async function getServerSideProps() {
  const categories = await getCategoryAPI();
  return {
    props: { categories },
  };
}
