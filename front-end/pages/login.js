import form from '@/styles/Form.module.css';
import { useContext, useState } from 'react';
import { loginApi } from 'services/api.services';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import AuthContext from 'services/auth.service';
import { Button, TextField } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

function Login() {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();
  const [userLog, SetUserLog] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    SetUserLog({ ...userLog, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginApi(userLog)
      .then((res) => {
        setUser(res.data);
        toast.success('Vous êtes connecté');
        setTimeout(() => {
          router.back();
        }, 1000);
      })
      .catch((e) => toast.error('Identifiants invalides'));
  };
  return (
    <div className={form.container}>
      <h1 className={form.title}>_Connexion</h1>

      <form className={form.box} onSubmit={handleSubmit}>
        <TextField
          name='email'
          type='email'

          label='Email'
          id='emailInput'
          placeholder='E-mail'
          variant='standard'
          value={userLog.email}
          onChange={handleChange}
          required
        />
        <TextField
          name='password'
          type='password'
          label='Mot de passe'
          id='passwordInput'
          placeholder='Mot de passe'
          value={userLog.password}
          variant='standard'
          onChange={handleChange}
          required
        />
        <Button
          variant='contained'
          type='submit'
          sx={{ backgroundColor: '#fb6565' }}
        >
          Se connecter
        </Button>
      </form>
      <p>Pas encore inscrit ?</p>
      <Button
        component='a'
        href='/signup'
        variant='outline'
        sx={{ color: '#fb6565' }}

        startIcon={<CreateIcon />}
      >
        Inscrivez-vous
      </Button>

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

export default Login;
