import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../helpers/firebase';

export const signup = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const forgetPassword = () => {
  // TO-DO
};
