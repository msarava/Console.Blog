import Layout from '@/components/Layout/Layout';
import { useContext, useState } from 'react';
import AuthContext from 'services/auth.service';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/breadcrumbs.css'




function MyApp({ Component, pageProps }) {
  const UserContext = useContext(AuthContext);

  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  );
}

export default MyApp;
