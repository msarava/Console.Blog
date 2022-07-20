import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import { Button } from '@mui/material';
import styles from '@/styles/Post.module.css';
import Link from 'next/link';

function SignInButton() {
  return (
    <Link href='/login'>
      <div className={styles.SignButton}>
        <Button
          startIcon={<HttpsIcon />}
          sx={{
            backgroundColor: '#fb6565',
            color: 'white',
          }}
        >
          Connectez-vous pour laisser un commentaire
        </Button>
      </div>
    </Link>
  );
}

export default SignInButton;
