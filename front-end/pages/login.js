import form from '@/styles/Form.module.css';
import { useContext, useState } from 'react';
import { loginApi } from 'services/api.services';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import AuthContext from 'services/auth.service';
import { Button } from '@mui/material';
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
      .catch((e) => toast.error('E-mail ou mot de passe invalides'));
  };
  return (
    <div className={form.container}>
      <form className={form.box} onSubmit={handleSubmit}>
        <label htmlFor='email'> E-mail</label>
        <input
          type='email'
          name='email'
          id='emailInput'
          placeholder='E-mail'
          value={userLog.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Mot de passe</label>
        <input
          type='password'
          name='password'
          id='passwordInput'
          placeholder='Mot de passe'
          value={userLog.password}
          onChange={handleChange}
        />

        <button type='submit'>Se connecter</button>
      </form>
      <p>Pas encore inscrit ?</p>
      <Button
        component='a'
        href='/signup'
        variant='outlined'
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
