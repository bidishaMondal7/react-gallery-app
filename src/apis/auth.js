import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth';
import { auth } from '../helpers/firebase';

export const signup = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const login = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const forgetPassword = async () => {
  // TO-DO
};

export const updateUserProfile = async (name) => {
  const result = await updateProfile(auth.currentUser, { displayName: name });
  return result;
};

export const logout = async () => {
  const result = await signOut(auth);
  return result;
};
