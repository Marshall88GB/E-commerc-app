import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDGEqYHx9AE0pT8a8p5yCGfxfpPQjpyfeE",
  authDomain: "e-commerc-5cb38.firebaseapp.com",
  databaseURL: "https://e-commerc-5cb38.firebaseio.com",
  projectId: "e-commerc-5cb38",
  storageBucket: "e-commerc-5cb38.appspot.com",
  messagingSenderId: "1071702904382",
  appId: "1:1071702904382:web:73e3ee964ae8a75e6ccb6f",
  measurementId: "G-DL9R4M3VEL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
