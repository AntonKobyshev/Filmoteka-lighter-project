import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  getAuth
} from 'firebase/auth';

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyApAVPx8g9ncyoyFM9AB-VsIVQFVbZimu8",
  authDomain: "kinoteka-cc589.firebaseapp.com",
  databaseURL: "https://kinoteka-cc589-default-rtdb.firebaseio.com",
  projectId: "kinoteka-cc589",
  storageBucket: "kinoteka-cc589.appspot.com",
  messagingSenderId: "626971331589",
  appId: "1:626971331589:web:4219ce873aff3fdaeba06c"
};

export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();
// // // // // // // // // // // // //
