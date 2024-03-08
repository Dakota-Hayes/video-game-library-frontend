import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from './AuthContext';
import SignIn from './SignIn';

const AuthWrapper = ({ children }: { children: React.ReactElement }) => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.isAuthorized) {
      SignIn()
      navigate('../');
    }
  }, [auth.isAuthorized, navigate]);

  return auth.isAuthorized ? children : null;
};

export default AuthWrapper;