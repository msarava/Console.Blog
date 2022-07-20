import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import { Button } from '@mui/material';
import styles from '@/styles/Post.module.css';

function SignInButton() {
  return (
    <div className={styles.SignButton}>
      <Button component="a" href="/login" startIcon={<HttpsIcon /> }
        sx={{
          backgroundColor: '#fb6565',
          color: 'white',
        }}
      >
        Connectez-vous pour laisser un commentaire
      </Button>
    </div>
  );
}

export default SignInButton;
