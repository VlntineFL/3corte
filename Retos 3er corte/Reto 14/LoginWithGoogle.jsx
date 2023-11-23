import React from 'react';
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from './actions';

const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginWithGoogle());
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginWithGoogle;