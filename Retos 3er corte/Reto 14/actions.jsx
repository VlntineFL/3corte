import { auth, googleProvider } from './firebaseConfig'; 

export const loginWithEmailPassword = (email, password) => async (dispatch) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(error.message);
  }
};

export const loginWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(googleProvider);
  } catch (error) {
    console.error(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error.message);
  }
};

export const checkAuthStatus = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is authenticated
      dispatch({ type: 'LOGIN', payload: user });
    } else {
      // User is not authenticated
      dispatch({ type: 'LOGOUT' });
    }
  });
};