import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmailPassword } from './actions';

const LoginWithEmailPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginWithEmailPassword(email, password));
  };

  const isUserAuthenticated = useMemo(() => {
    return !!user;
    }, [user]);


  return (
    <div>
      <h2>Login with Email and Password</h2>
      <div>
      <h2>Login with Email and Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    
    </div>)}
    ;
    
{};

export default LoginWithEmailPassword; 