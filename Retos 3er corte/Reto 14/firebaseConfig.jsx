import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };