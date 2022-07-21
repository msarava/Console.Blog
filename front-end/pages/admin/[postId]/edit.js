import { getOnePost, updateOnePostAPI } from 'services/api.services';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import form from '@/styles/CreateForm.module.css';
import { useRouter } from 'next/router';
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { createOnePostAPI, getCategoryAPI } from 'services/api.services';

function edit({ post, categories }) {
  console.log('SSR', post);
  const [updatedPost, SetUpdatedPost] = useState({
    title: post.title,
    content: post.content,
    category: post.category[0]._id,
    picture: post.picture,
  });
  const router = useRouter();
  const handleChange = (event) => {
    SetUpdatedPost({ ...updatedPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateOnePostAPI(updatedPost, post._id)
      .then(() => {
        toast.success('Mis à jour avec succés');
        SetUpdatedPost({
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
      <h1 className={form.title}>Modifier un billet</h1>
      <form className={form.box} onSubmit={handleSubmit} method='post'>
        <TextField
          name='title'
          label='Titre'
          id='titleInput'
          placeholder='Titre'
          variant='standard'
          value={updatedPost.title}
          onChange={handleChange}
        />
        <TextField
          name='content'
          label='Corps du texte'
          id='contentInput'
          placeholder='Votre texte...'
          variant='outlined'
          value={updatedPost.content}
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
          value={updatedPost.picture}
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
            value={updatedPost.category}
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

export async function getServerSideProps({ params }) {
  const { postId } = params;
  const categories = await getCategoryAPI();

  const post = await getOnePost(postId);

  return {
    props: {
      post,
      categories,
    },
  };
}

export default edit;
