import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCDO313fRGEbw5UM5pTbgk6sjBDEiuZjs",
  authDomain: "crown-clothing-db-e40ff.firebaseapp.com",
  projectId: "crown-clothing-db-e40ff",
  storageBucket: "crown-clothing-db-e40ff.firebasestorage.app",
  messagingSenderId: "375468360998",
  appId: "1:375468360998:web:5372c7d9912a32b56d2de7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additonalParams = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additonalParams,
    });
  }
  return userDocRef;
};

//functionality for signing in user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
