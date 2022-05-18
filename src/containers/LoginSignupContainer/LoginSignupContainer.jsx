import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import './LoginSignupContainer.css';

function LoginSignupContainer() {
  const location = useLocation();
  // Retrieving path from URL
  const path = location.pathname;

  /*
    Checking the path. If the path is /login we return Login component and
    if the path is /signup we return Signup component
  */
  const getComponent = () => {
    if (path === '/login') return <Login />;
    if (path === '/signup') return <Signup />;
    return '';
  };

  return <div>{getComponent()}</div>;
}

export default LoginSignupContainer;
