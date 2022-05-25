import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RootContext } from '../contexts/RootContext';

export const PrivateRoute = () => {
  const rootContext = useContext(RootContext);
  //checking if user is available
  const user = rootContext.user;

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};
