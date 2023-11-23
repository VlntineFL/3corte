import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };