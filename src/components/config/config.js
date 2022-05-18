import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBUnaUZzsgGOdaRdveKxooFcgdTEdz8yIg',
  authDomain: 'react-gallery-app-c1bf2.firebaseapp.com',
  projectId: 'react-gallery-app-c1bf2',
  storageBucket: 'react-gallery-app-c1bf2.appspot.com',
  messagingSenderId: '259998956141',
  appId: '1:259998956141:web:092294905c77e544d99d64'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
