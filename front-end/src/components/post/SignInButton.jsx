import React from 'react';
import HttpsIcon from '@mui/icons-material/Https';
import { Button } from '@mui/material';

function SignInButton() {
  return (
    <div>
      <Button sx={{backgroundColor:'#fb6565', color:'white'}}>
        <HttpsIcon />
        Connectez-vous pour laisser un commentaire
      </Button>
    </div>
  );
}

export default SignInButton;
