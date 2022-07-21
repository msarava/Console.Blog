import { Avatar, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import form from '@/styles/Comment.module.css';
import { useRouter } from 'next/router';
import { createCommentAPI, getCommentFromPostAPI } from 'services/api.services';
import { ToastContainer, toast } from 'react-toastify';

function CommentForm({ postId, user, setComments }) {
  const router = useRouter();

  const [newComment, setNewComment] = useState({ content: '' });
  const handleChange = (e) => {
    setNewComment({ content: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCommentAPI(newComment, postId);
    setComments(await getCommentFromPostAPI(postId));
    setNewComment({ content: '' });
    toast.success('Votre commentaire a bien été publié');
  };
  return (
    <div className={form.formContainer}>
      <div className={form.formHeader}>
        <Avatar src={user.picture} />
        <h4>{user.firstname}</h4>
      </div>
      <form onSubmit={handleSubmit} method='post'>
        <TextField
          name='comment'
          label='Nouveau Commentaire...'
          id='commentInput'
          placeholder='Commentaire'
          value={newComment.content}
          onChange={handleChange}
          multiline
          fullWidth
        />
        <div className={form.formBtn}>
          <Button
            type='submit'
            variant='contained'
            sx={{ backgroundColor: '#fb6565' }}
          >
            Valider
          </Button>
        </div>
      </form>{' '}
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
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

export default CommentForm;
