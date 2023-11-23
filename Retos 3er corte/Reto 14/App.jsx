import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { checkAuthStatus } from './actions';
import LoginWithEmailPassword from './LoginWithEmailPassword';
import LoginWithGoogle from './LoginWithGoogle';
import Logout from './Logout';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    store.dispatch(checkAuthStatus());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h1>Authentication App</h1>
        <p>User: {user ? user.displayName : 'Not logged in'}</p>
        <LoginWithEmailPassword />
        <LoginWithGoogle />
        <Logout />
      </div>
    </Provider>
  );
};

export default App;