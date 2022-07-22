import { useRouter } from 'next/router';
import React, { Children, useContext, useEffect } from 'react';
import AuthContext from 'services/auth.service';

function RouteAuth({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (user !== 'admin' && router.asPath.includes('admin')) {
      router.push('/');
    }
  }, []);
  return <div>{children}</div>;
}

export default RouteAuth;
