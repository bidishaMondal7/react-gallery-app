import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import _ from 'lodash';
import { RootContext } from '../../contexts/RootContext';
import './LoginSignupContainer.css';

function LoginSignupContainer() {
  const location = useLocation();
  const navigate = useNavigate();
  const rootContext = useContext(RootContext);

  useEffect(() => {
    //checking if user is available
    const user = rootContext.user;

    if (!_.isEmpty(user)) {
      navigate('/home');
    }
  }, [rootContext.user]);

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
