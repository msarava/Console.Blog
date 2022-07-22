import Layout from '@/components/Layout/Layout';
import { useContext, useState } from 'react';
import AuthContext from 'services/auth.service';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/breadcrumbs.css';
import RouteAuth from '@/components/admin/RouteAuth';

function MyApp({ Component, pageProps }) {
  const UserContext = useContext(AuthContext);

  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout>
        <RouteAuth>
          <Component {...pageProps} />
        </RouteAuth>
      </Layout>
    </AuthContext.Provider>
  );
}

export default MyApp;
